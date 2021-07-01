import { Component } from 'react'
import axios from 'axios'
import MainHeader from '../MainHeader/MainHeader'
import errorIcon from '../../assets/Icons/error-24px.svg'
import {addWarehouse} from "../../utils/api"
import './WarehouseForm.scss'

class EditWarehouseForm extends Component {
    state={
        data:null,
        form:{
            name:false,
            address:false,
            city:false,
            country:false,
            contactName:false,
            position:false,
            phone:false,
            email:false,
        }   
    }

    componentDidMount(){
        if (this.props.match.params.warehousesId){
            axios
                .get(`/api/warehouses/${this.props.match.params.warehousesId}`)
                .then(res => {
                    this.setState({data:{
                        name:res.data.name,
                        address:res.data.address,
                        city:res.data.city,
                        country:res.data.country,
                        contactName:res.data.contact.name,
                        position:res.data.contact.position,
                        phone:res.data.contact.phone,
                        email:res.data.contact.email,
                    }})
                    this.setState({form:{
                        name:true,
                        address:true,
                        city:true,
                        country:true,
                        contactName:true,
                        position:true,
                        phone:true,
                        email:true,
                    }})
                })
                .catch(err => console.log(err))
        }

    }

    handleChange = (e) => {
        this.setState({data:{
            ...this.state.data, [e.target.name]:e.target.value
        }})
        if(e.target.value === ""){
            this.setState({
                form:{...this.state.form, [e.target.name]: false}
            })
        } else {
            this.setState({
                form:{...this.state.form, [e.target.name]: true}
            })
        }
    }

    handleAdd = (e) => {
        e.preventDefault()
        //add warehouse
        const {name, address, city, country, contactName, position, phone, email} = this.state.form
        if (name, address, city, country, contactName, position, phone, email) {
            const data = {
                "name": this.state.data.name,
                "address": this.state.data.address,
                "city": this.state.data.city,
                "country": this.state.data.country,
                "contact": {
                    "name": this.state.data.contactName,
                    "position": this.state.data.position,
                    "phone": this.state.data.phone,
                    "email": this.state.data.email,
                }
            }
            addWarehouse(data)
                .then((res => {
                    console.log(res)
                })).catch(err => {
                    console.log(err)
            })
        } else {
            alert("field can't be empty!")
        }
    }

    handleSave = (e) =>{
        e.preventDefault()
        const {name, address, city, country, contactName, position, phone, email} = this.state.form
        if (name && address && city && country && contactName && position && phone && email){
            axios
                .put(`/api/warehouses/${this.props.match.params.warehousesId}`,{
                    "name":this.state.data.name,
                    "address":this.state.data.address,
                    "city":this.state.data.city,
                    "country":this.state.data.country,
                    "contact":{
                        "name":this.state.data.contactName,
                        "position":this.state.data.position,
                        "phone":this.state.data.phone,
                        "email":this.state.data.email,
                    }
                })
                .then(res => alert("Warehouse edited!"))
                .catch(err => console.log(err))
        } else {
            alert("field can't be empty!")
        }
    }

    handleCancel = (e) => {
        e.preventDefault()
        this.props.history.push("/")
    }

    render(){
        return (
                <form className="editwarehouseform" onSubmit={this.props.match.params.warehousesId ? this.handleSave : this.handleAdd}>
                    <MainHeader navigate={this.props} headerName={this.props.match.params.warehousesId ? "Edit Form" : "Add Warehouse"}/>
                    <div className="editwarehouseform__wrapper">
                        <div className="editwarehouseform__left">
                            <h2 className="editwarehouseform__title">Warehouse Details</h2>
                            <label htmlFor="name" className="editwarehouseform__label">WarehouseName</label>
                            <input 
                                placeholder="Warehouse Name" 
                                name="name" 
                                className="editwarehouseform__input"
                                value={this.state.data? this.state.data.name : ""}
                                onChange={this.handleChange}/>
                            <div className={this.state.form.name ? "editwarehouseform__warning--valid" : "editwarehouseform__warning"}>
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