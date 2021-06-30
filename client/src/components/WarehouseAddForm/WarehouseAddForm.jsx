import React, { Component } from "react";
import "./WarehouseAddForm.scss";

class WarehouseForm extends Component {

    render() {
        return (
            <form className="addWarehouseForm">
                <div className="addWarehouseForm__wrapper">
                    <div className="addWarehouseForm__left">
                        <h2 className="addWarehouseForm__title">Warehouse Details</h2>
                        <label htmlFor="name" className="addWarehouseForm__label">WarehouseName</label>
                        <input placeholder="Warehouse Name" name="name" className="addWarehouseForm__input"></input>
                        <label htmlFor="address" className="addWarehouseForm__label">Street Address</label>
                        <input placeholder="Street Address" name="address" className="addWarehouseForm__input"></input>
                        <label htmlFor="city" className="addWarehouseForm__label">City</label>
                        <input placeholder="City" name="city" className="addWarehouseForm__input"></input>
                        <label htmlFor="country" className="addWarehouseForm__label">Country</label>
                        <input placeholder="Country" className="addWarehouseForm__input"></input>
                    </div>
                    <div className="addWarehouseForm__right">
                        <h2 className="addWarehouseForm__title">Contact Details</h2>
                        <label htmlFor="contactName" className="addWarehouseForm__label">Contact Name</label>
                        <input placeholder="Contact Name" name="contactName" className="addWarehouseForm__input"></input>
                        <label htmlFor="position" className="addWarehouseForm__label">Position</label>
                        <input placeholder="Position" name="position" className="addWarehouseForm__input"></input>
                        <label htmlFor="number" className="addWarehouseForm__label">Phone Number</label>
                        <input placeholder="Phone Number" name="number" className="addWarehouseForm__input"></input>
                        <label htmlFor="email" className="addWarehouseForm__label">Email</label>
                        <input placeholder="Email" name="email" className="addWarehouseForm__input"></input>
                    </div>
                </div>
                <div className="addWarehouseForm__action">
                    <button type="submit" className="addWarehouseForm__cancel">Cancel</button>
                    <button type="submit" className="addWarehouseForm__submit">Save</button>
                </div>
            </form>
        )
    }
}

export default WarehouseForm;
