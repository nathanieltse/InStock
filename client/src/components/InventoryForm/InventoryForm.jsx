import { Component } from 'react'
import axios from 'axios'
import MainHeader from '../MainHeader/MainHeader'
import errorIcon from '../../assets/Icons/error-24px.svg'
import './InventoryForm.scss'

class EditWarehouseForm extends Component {
    state={
        data:null,
        form:{
            warehouseName: false,
            itemName: false,
            description: false,
            category: false,
            status: true,
            quantity: false,
        }   
    }

    componentDidMount(){
        if (this.props.match.params.inventoryId){
            axios
                .post(`/api/inventories/${this.props.match.params.inventoryId}`)
                .then(res => {
                    this.setState({data:{
                        itemName:res.data.itemName,
                        description: res.data.description,
                        quantity: res.data.quantity,
                        status: res.data.quantity,
                        warehouseName: res.data.warehouseName,
                        category: res.data.category,
                    }})
                    this.setState({form:{
                        itemName:true,
                        description:true,
                        quantity:true,
                        status: true,
                        warehouseName: true,
                        category: true,
                    }})
                })
                .catch(err => console.log(err))
        }

    }

    handleChange = (e) => {
        this.setState({data:{
            ...this.state.data, [e.target.itemName]:e.target.value
        }})
        if(e.target.value === ""){
            this.setState({
                form:{...this.state.form, [e.target.itemName]: false}
            })
        } else {
            this.setState({
                form:{...this.state.form, [e.target.itemName]: true}
            })
        }
    }

    handleAdd = (e) => {
        e.preventDefault()
        //add warehouse
        const {itemName, description, quantity, status, warehouseName, category} = this.state.form
        if (itemName, description, quantity, status, warehouseName, category){
            console.log("form submitted")
        } else {
            alert("field should not be empty!")
        }
    }

    handleSave = (e) =>{
        e.preventDefault()
        const {itemName, description, quantity, status, warehouseName, category} = this.state.form
        if (itemName && description && quantity && status && warehouseName && category){
            axios
                .post(`/api/inventories/${this.props.match.params.inventoryId}`,{
                    "itemName":this.state.data.itemName,
                    "description":this.state.data.description,
                    "quantity":this.state.data.quantity,
                    "status":this.state.data.status,
                    "warehouseName":this.state.data.warehouseName,
                    "category":this.state.data.category,
                })
                .then(res => alert("Inventory Edited!"))
                .catch(err => console.log(err))
        } else {
            alert("field should not be empty!")
        }
    }

    handleCancel = (e) => {
        e.preventDefault()
        this.props.history.push("/")
    }

    render(){
        return (
                <form className="editwarehouseform" onSubmit={this.props.match.params.inventoryId ? this.handleSave : this.handleAdd}>
                    <MainHeader navigate={this.props} headerName={this.props.match.params.inventoryId ? "Edit Inventory" : "Add Inventory"}/>
                    <div className="editinventoryform__wrapper">
                        <div className="editinventoryform__left">
                            <h2 className="editinventoryform__title">Warehouse Details</h2>
                            <label htmlFor="name" className="editinventoryform__label">Item Name</label>
                            <input 
                                placeholder="Item Name" 
                                name="name" 
                                className="editinventoryform__input"
                                value={this.state.data? this.state.data.itemName : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.itemName ? "editinventoryform__warning--valid" : "editinventoryform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="address" className="editwarehouseform__label">Street Address</label>
                            <input 
                                placeholder="Street Address" 
                                name="address" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.address : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.address ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="city" className="editwarehouseform__label">City</label>
                            <input 
                                placeholder="City" 
                                name="city" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.city : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.city ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="country" className="editwarehouseform__label">Country</label>
                            <input 
                                placeholder="Country" 
                                name="country" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.country : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.country ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                        </div>
                        <div className="editwarehouseform__right">
                            <h2 className="editwarehouseform__title">Contact Details</h2>
                            <label htmlFor="contactName" className="editwarehouseform__label">Contact Name</label>
                            <input 
                                placeholder="Contact Name" 
                                name="contactName" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.contactName : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.contactName ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="position" className="editwarehouseform__label">Position</label>
                            <input 
                                placeholder="Position" 
                                name="position" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.position : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.position ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="number" className="editwarehouseform__label">Phone Number</label>
                            <input 
                                placeholder="Phone Number" 
                                name="phone" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.phone : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.phone ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="email" className="editwarehouseform__label">Email</label>
                            <input 
                                placeholder="Email" 
                                name="email" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.email : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.email ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                        </div>
                    </div>
                    <div className="editwarehouseform__action">
                        <button className="editwarehouseform__cancel" onClick={this.handleCancel}>Cancel</button>
                        <button type="submit" className="editwarehouseform__submit">{this.props.match.params.warehousesId ? "Save" : "+ Add Warehouse"}</button>
                    </div>
                </form>
                
        )
    }
}

export default EditWarehouseForm