import { Component } from 'react'
import axios from 'axios'
import MainHeader from '../MainHeader/MainHeader'
// import errorIcon from '../../assets/Icons/error-24px.svg'
//import { addWarehouse } from "../../utils/api"
import { getWarehouses, addInventory } from "../../utils/api"

import './InventoryForm.scss'

const edit = true

let warehouseData = [];
let categories = [];



class InventoryForm extends Component {
    state = {
        data: {},
        form: {
            category: false,
            description: false,
            id: false,
            itemName: false,
            quantity: false,
            warehouseName: false,
        }
    }

    componentDidMount() {
        getWarehouses()
            .then(res => {
                warehouseData = res.data.map(warehouse => {
                    return { "name": warehouse.name, "id": warehouse.id }
                })
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`/api/inventory`)
            .then(res => {
                res.data.map(item => {
                    categories.push(item.category)
                })
        })
        if (edit) {
            axios
                // .get(`/api/inventory/${this.props.match.params.inventoryId}`)
                .get(`/api/inventory/d0b01bdb-fbde-40c2-90ea-10750db5e442`)
                .then(res => {
                    console.log(res)
                    this.setState({
                        data: {
                            category: res.data.category,
                            description: res.data.description,
                            id: res.data.id,
                            itemName: res.data.itemName,
                            quantity: res.data.quantity,
                            status: res.data.status,
                            warehouseId: res.data.warehouseId,
                            warehouseName: res.data.warehouseName,
                        }
                    })
                    this.setState({
                        form: {
                            category: true,
                            description: true,
                            itemName: true,
                            quantity: true,
                            status: true,
                            warehouseName: true,
                        }
                    })
                })
                .catch(err => console.log(err))
        }

    }

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data, [e.target.name]: e.target.value
            }
        })
        if (e.target.value === "") {
            this.setState({
                form: { ...this.state.form, [e.target.name]: false }
            })
        } else {
            this.setState({
                form: { ...this.state.form, [e.target.name]: true }
            })
        }
    }

    handleAdd = (e) => {
        e.preventDefault()
        console.log(category)
        //add warehouse
        const { category, description, itemName, quantity, status, warehouseName } = this.state.form
        let warehouseId = warehouseData.find(warehouse => warehouse.name === warehouseName)
        if (category && description && itemName && quantity && status && warehouseName) {
            const data = {
                "category": this.state.data.category,
                "description": this.state.data.description,
                "itemName": this.state.data.itemName,
                "quantity": this.state.data.quantity,
                "status": this.state.data.status,
                "warehouseId": warehouseId,
                "warehouseName": this.state.data.warehouseName
            }
            addInventory(data)
                .then((res => {
                    console.log(res)
                })).catch(err => {
                    console.log(err)
                })
        } else {
            alert("field can't be empty!")
        }
    }

    handleSave = (e) => {
        e.preventDefault()
        console.log(category)
        const { category, description, itemName, quantity, status, warehouseName} = this.state.form
        if (category && description && itemName && quantity && status && warehouseName) {
            let warehouseId = warehouseData.find(warehouse => warehouse.name === warehouseName)
    
            axios
                .put(`/api/inventory/d0b01bdb-fbde-40c2-90ea-10750db5e442`,
                        {
                        "category": this.state.data.category,
                        "description": this.state.data.description,
                        "itemName": this.state.data.itemName,
                        "quantity": this.state.data.quantity,
                        "status": this.state.data.status,
                        "warehouseId": warehouseId,
                        "warehouseName": this.state.data.warehouseName
                        }
                )
                .then(res => alert("Inventory Edited edited!"))
                .catch(err => console.log(err))
        } else {
            alert("field can't be empty!")
        }
    }

    handleCancel = (e) => {
        e.preventDefault()
        this.props.history.push("/")
    }

    render() {
        let uniqueCategories = categories.filter((category, index, array) => array.indexOf(category) === index);

        return (
            (edit && this.state.data=== 0) ?
                 <p> Loading ... </p>
                    :
        
            <form className="inventoryForm" onSubmit={edit ? this.handleSave : this.handleAdd}>
                <MainHeader navigate={this.props} headerName={edit ? "Edit Inventory Item" : "Add New Inventory Item"} />
                <div className="inventoryForm__wrapper">
                    <div className="inventoryForm__left">
                        <h2 className="inventoryForm__title">Item Details</h2>
                        <label htmlFor="name" className="inventoryForm__label">Item Name</label>
                        <input
                            placeholder="Item Name"
                            name="name"
                            className="inventoryForm__input"
                            value={edit ? this.state.data.itemName : ""}
                            onChange={this.handleChange} />

                        <label htmlFor="description" className="inventoryForm__label">Description</label>
                        <input
                            placeholder="Please enter a brief item description"
                            name="description"
                            className="inventoryForm__input"
                            value={this.state.data ? this.state.data.description : ""}
                            onChange={this.handleChange} />

                        <label htmlFor="category" className="inventoryForm__label">Category</label>
                        {/* <input
                            placeholder="Please Select"
                            name="category"
                            className="inventoryForm__input"
                            value={this.state.data ? this.state.data.city : ""}
                            onChange={this.handleChange} /> */}
                            <select name="category" className="inventoryForm__input" >
                            {edit ?
                                <>
                                    <option value={this.state.data ? this.state.data.category : ""} >{this.state.data.category}</option>
                                    {uniqueCategories.map(item => {
                                        return (<option key={item.id} value={`${item}`} onChange={this.handleChange}>{`${item} `} </option>)
                                    })}
                                </>
                                :
                                <>
                                    <option value="Please Select" selected>Please Select</option>
                                    {uniqueCategories.map(item => {
                                        return (<option key={item.id} value={`${item}`} onChange={this.handleChange}>{`${item} `} </option>)
                                    })}
                                </>
                            }
                        </select>

                    </div>
                    <div className="inventoryForm__right">
                        <h2 className="inventoryForm__title">Item Availability</h2>
                        <label htmlFor="status" className="inventoryForm__label">Status</label>
                        <div>
                            <input type="radio" id="instock" name="instock" value="In Stock"  />
                            <label htmlFor="instock"> In Stock</label>
                            <input type="radio" id="outofstock" name="outofstock" value="outofstock" />
                            <label htmlFor="instock">Out of Stock</label>
                        </div>

                        <label htmlFor="quantity" className="inventoryForm__label">Quantity</label>
                        <input
                            placeholder="0"
                            name="quantity"
                            className="inventoryForm__input"
                            value={this.state.data ? this.state.data.quantity : ""}
                            onChange={this.handleChange} />

                        <label htmlFor="warehouse" className="inventoryForm__label">Warehouse</label>

                        <select name="warehouse" className="inventoryForm__input">
                            {edit ?
                                <>
                                    <option value="Please Select" selected>Please Select</option>
                                    {warehouseData.map(item => {
                                        return (
                                            <option key={item.id} value={`${item.name}`} onChange={this.handleChange} >{`${item.name} `}  </option>)
                                    })}
                                </>
                                :
                                <>
                                    <option value="Please Select" selected>Please Select</option>
                                    {warehouseData.map(item => {
                                        return (
                                            <option key={item.id} value={`${item}`} onChange={this.handleChange} >{`${item} `}</option>)
                                    })}
                                </>
                            }
                        </select>
                    </div>
                </div>
                <div className="inventoryForm__action">
                    <button className="inventoryForm__cancel" onClick={this.handleCancel}>Cancel</button>
                    <button type="submit" className="inventoryForm__submit">{edit ? "Save" : "+ Add Item"}</button>
                </div>
            </form>

        )
    }
}

export default InventoryForm