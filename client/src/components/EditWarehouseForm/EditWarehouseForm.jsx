import { Component } from 'react'
import MainHeader from '../MainHeader/MainHeader'
import errorIcon from '../../assets/Icons/error-24px.svg'
import './EditWarehouseForm.scss'

class EditWarehouseForm extends Component {

    render(){
        return (
                <form className="editwarehouseform">
                    <MainHeader navigate={this.props} headerName="Edit Form"/>
                    <div className="editwarehouseform__wrapper">
                        <div className="editwarehouseform__left">
                            <h2 className="editwarehouseform__title">Warehouse Details</h2>
                            <label htmlFor="name" className="editwarehouseform__label">WarehouseName</label>
                            <input placeholder="Warehouse Name" name="name" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="address" className="editwarehouseform__label">Street Address</label>
                            <input placeholder="Street Address" name="address" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="city" className="editwarehouseform__label">City</label>
                            <input placeholder="City" name="city" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="country" className="editwarehouseform__label">Country</label>
                            <input placeholder="Country" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                        </div>
                        <div className="editwarehouseform__right">
                            <h2 className="editwarehouseform__title">Contact Details</h2>
                            <label htmlFor="contactName" className="editwarehouseform__label">Contact Name</label>
                            <input placeholder="Contact Name" name="contactName" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="position" className="editwarehouseform__label">Position</label>
                            <input placeholder="Position" name="position" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="number" className="editwarehouseform__label">Phone Number</label>
                            <input placeholder="Phone Number" name="number" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                            <label htmlFor="email" className="editwarehouseform__label">Email</label>
                            <input placeholder="Email" name="email" className="editwarehouseform__input"></input>
                            <div className="editwarehouseform__warning">
                                <img className="editwarehouseform__warning-icon" src={errorIcon} alt="error icon"/>
                                <p className="editwarehouseform__warning-text">This field is required</p>
                            </div>
                        </div>
                    </div>
                    <div className="editwarehouseform__action">
                        <button type="submit" className="editwarehouseform__cancel">Cancel</button>
                        <button type="submit" className="editwarehouseform__submit">Save</button>
                    </div>
                </form>
        )
    }
}

export default EditWarehouseForm