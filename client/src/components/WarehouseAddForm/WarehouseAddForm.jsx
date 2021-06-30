import React, { Component } from "react";
import "./WarehouseAddForm.scss";

class WarehouseForm extends Component {

    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
            >
                <section className="form__warehouse">
                    <h2 className="form__warehouse-title">Warehouse Details</h2>
                    <label>
                        <h3 className="form__label">Warehouse Name</h3>
                        <input className="form__input" type="text" name="warehousename" placeholder="Warehouse Name"
                        />
                    </label>
                    <label>
                        <h3 className="form__label">Street Address</h3>
                        <input className="form__input" type="text" name="address" placeholder="Street Address"
                        />
                    </label>
                    <label>
                        <h3 className="form__label">City</h3>
                        <input className="form__input" type="text" name="city" placeholder="City"
                        />
                    </label>
                    <label>
                        <h3 className="form__label">Country</h3>
                        <input className="form__input" type="text" name="country" placeholder="Country"   
                        />
                    </label>
                </section>
                <section className="form__contact">
                    <h2 className="form__contact-title">Contact Details</h2>
                    <label className="form__over">
                        <h3 className="form__label">Contact Name</h3>
                        <input className="form__input" type="text" name="ContactName" placeholder="Contact Detail"
                        />
                    </label>
                    <label>
                        <h3 className="form__label">Position</h3>
                        <input className="form__input" type="text" name="position" placeholder="Position"
                        />
                    </label>
                    <label>
                        <h3 className="form__label">Phone Number</h3>
                        <input className="form__input" type="phone" name="phoneNumber" placeholder="Phone Number"
                        />
                    </label>
                    <label>
                        <h3 className="form__label">Email</h3>
                        <input className="form__input" type="email" name="email" placeholder="Email"
                        />
                    </label>
                </section>
            </form>
        )
    }
}

export default WarehouseForm;
