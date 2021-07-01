import "./WarehouseList.scss";
import WarehouseListCard from "../WarehouseListCard/WarehouseListCard"
import Labels from "../Labels/Labels"
import { Link } from "react-router-dom"

import React from 'react'

function WarehouseList({warehouseList}) {
    return (
        <section className="warehouse">
            <section className="warehouse__header">
                <h1 className="warehouse__title">Warehouses</h1>
                <form className="warehouse__form">
                    <input
                        className="warehouse__form-input warehouse__form-input--search"
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                    <Link to="/warehouses/add">
                    <input
                        className="warehouse__form-input warehouse__form-input--submit"
                        type="submit"
                        name="addWarehouse"
                        value="+ Add New Warehouse"
                        />
                    </Link>
                </form>
            </section>
            <section className="warehouse__labels">
                <Labels className="warehouse__labels-item" name="WAREHOUSE" />
                <Labels className="warehouse__labels-item warehouse__labels-item--address" name="ADDRESS" />
                <Labels className="warehouse__labels-item" name="CONTACT NAME" />
                <Labels className="warehouse__labels-item" name="CONTACT INFORMATION" />
                <Labels className="warehouse__labels-item" name="ACTIONS" />
            </section>
            {warehouseList.map(item => {
                return (
                        <WarehouseListCard warehouse={item} />
                )
            })}
        </section>
    )
}

export default WarehouseList






