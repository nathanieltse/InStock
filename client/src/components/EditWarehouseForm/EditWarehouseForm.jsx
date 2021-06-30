import { Component } from 'react'
import MainHeader from '../MainHeader/MainHeader'
import './EditWarehouseForm.scss'

class EditWarehouseForm extends Component {

    render(){
        return (
                <form className="warehouseform">
                    <MainHeader navigate={this.props} headerName="Edit Form"/>
                    <div className="warehouseform__wrapper">
                        <div className="warehouseform__left">
                            <h2 className="warehouseform__title">Warehouse Details</h2>
                            <label htmlFor="name" className="warehouseform__label">WarehouseName</label>
                            <input placeholder="Warehouse Name" name="name" className="warehouseform__input"></input>
                            <label htmlFor="address" className="warehouseform__label">Street Address</label>
                            <input placeholder="Street Address" name="address" className="warehouseform__input"></input>
                            <label htmlFor="city" className="warehouseform__label">City</label>
                            <input placeholder="City" name="city" className="warehouseform__input"></input>
                            <label htmlFor="country" className="warehouseform__label">Country</label>
                            <input placeholder="Country" className="warehouseform__input"></input>
                        </div>
                        <div className="warehouseform__right">
                            <h2 className="warehouseform__title">Contact Details</h2>
                            <label htmlFor="contactName" className="warehouseform__label">Contact Name</label>
                            <input placeholder="Contact Name" name="contactName" className="warehouseform__input"></input>
                            <label htmlFor="position" className="warehouseform__label">Position</label>
                            <input placeholder="Position" name="position" className="warehouseform__input"></input>
                            <label htmlFor="number" className="warehouseform__label">Phone Number</label>
                            <input placeholder="Phone Number" name="number" className="warehouseform__input"></input>
                            <label htmlFor="email" className="warehouseform__label">Email</label>
                            <input placeholder="Email" name="email" className="warehouseform__input"></input>
                        </div>
                    </div>
                    <div className="warehouseform__action">
                        <button type="submit" className="warehouseform__cancel">Cancel</button>
                        <button type="submit" className="warehouseform__submit">Save</button>
                    </div>
                </form>
        )
    }
}

export default EditWarehouseForm