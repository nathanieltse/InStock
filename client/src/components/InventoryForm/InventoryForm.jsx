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
        data: {}
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
                .get(`/api/inventory/9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3`)
                .then(res => {
                    const { category, description, itemName, status,id,  quantity, warehouseName } = res.data[0]
                    this.setState({
                        data: {
                            
                            category,
                            description,
                            id,
                            itemName,
                            quantity,
                            status,
                            warehouseName,
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
    }

    handleAdd = (e) => {
        e.preventDefault()
        const { category, description, itemName,status, quantity, warehouseName } = this.state.data
        let warehouseId = warehouseData.find(warehouse => warehouse.name === warehouseName)

        if (category && description && itemName && quantity && warehouseName) {
            const data = {
                "category": category,
                "description": description,
                "itemName": itemName,
                "quantity": quantity,
                "status": status,
                "warehouseID": warehouseId.id,
                "warehouseName": warehouseName
            }
            
            addInventory(data)
                .then((res => {
                    console.log("posted")
                })).catch(err => {
                    console.log(err)
                })
        } else {
            alert("field can't be empty!")
        }
    }

    handleSave = (e) => {
        e.preventDefault()
        const { category, description, itemName, status, quantity, warehouseName } = this.state.data

        if (category && description && itemName && quantity && warehouseName) {
            let warehouseId = warehouseData.find(warehouse => warehouse.name === warehouseName)
            console.log("put req")
            axios
                .put(`/api/inventory/9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3/edit`,
                        {
                            "category": category,
                            "description": description,
                            "itemName": itemName,
                            "quantity": quantity,
                            "status": status,
                            "warehouseID": warehouseId.id,
                            "warehouseName": warehouseName
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
                        <label htmlFor="itemName" className="inventoryForm__label">Item Name</label>
                        <input
                            placeholder="Item Name"
                            name="itemName"
                            className="inventoryForm__input"
                            value={this.state.data ? this.state.data.itemName : ""}
                            onChange={this.handleChange} />

                        <label htmlFor="description" className="inventoryForm__label">Description</label>
                        <textarea
                            placeholder="Please enter a brief item description"
                            name="description"
                            className="inventoryForm__input inventoryForm__input--textarea"
                            value={this.state.data ? this.state.data.description : ""}
                            onChange={this.handleChange} ></textarea>

                        <label htmlFor="category" className="inventoryForm__label">Category</label>

                            <select name="category" className="inventoryForm__input inventoryForm__input--select" onChange={this.handleChange}>
                                    <option value={this.state.data ? this.state.data.category : "Please Select"} >{edit ? this.state.data.category : "Please Select"}</option>
                                    {uniqueCategories.map(item => {
                                        return (<option key={item.id} value={`${item}`}  >{`${item} `} </option>)
                                    })}
                        </select>

                    </div>
                    <div className="inventoryForm__right">
                        <h2 className="inventoryForm__title">Item Availability</h2>
                        <label htmlFor="status" className="inventoryForm__label">Status</label>
                            <div className="inventoryForm__status">
                                <div className={this.state.data.status === "Out Of stock" ? "inventoryForm__status-slate" : ""}>
                                    <input type="radio" id="status" name="status" value="In Stock" onChange={this.handleChange} />
                                    <label htmlFor="status" className="inventoryForm__status-label">In Stock</label>
                                </div>
                                <div className={this.state.data.status === "In Stock"? "inventoryForm__status-slate": "" }>
                                    <input type="radio" id="status" name="status" value="Out Of stock" onChange={this.handleChange} />
                                    <label htmlFor="status" className="inventoryForm__status-label">Out of Stock</label>
                                </div>

                            </div>
                            <label htmlFor="quantity" className={this.state.data.status === "In Stock" ? "inventoryForm__label" : "inventoryForm__label-hide"}>Quantity</label>
                            <input
                                placeholder="0"
                                name="quantity"
                                className={this.state.data.status === "In Stock" ? "inventoryForm__input" : "inventoryForm__label-hide"}
                                value={this.state.data ? this.state.data.quantity : ""}
                                onChange={this.handleChange} />
                        
                        <label htmlFor="warehouseName" className="inventoryForm__label">Warehouse</label>

                            <select name="warehouseName" className="inventoryForm__input inventoryForm__input--select" onChange={this.handleChange}>
                                <option value={this.state.data ? this.state.data.warehouseName : "Please Select"} selected>{this.state.data ? this.state.data.warehouseName : "Please Select"}</option>
                                    {warehouseData.map(item => {
                                        return (
                                            <option key={item.id} value={`${item.name}`}  >{`${item.name} `}  </option>)
                                    })}
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