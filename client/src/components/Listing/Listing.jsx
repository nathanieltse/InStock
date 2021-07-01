import ListingCard from "../ListingCard/ListingCard"
import Labels from "../Labels/Labels"
import { Link } from "react-router-dom"

import "./Listing.scss";

function Listing({warehouseList}) {
    return (
        <section className="listing">
            <section className="listing__header">
                <h1 className="listing__title">Warehouses</h1>
                <form className="listing__form">
                    <input
                        className="listing__form-input listing__form-input--search"
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                    <Link to="/warehouses/add">
                    <input
                        className="listing__form-input listing__form-input--submit"
                        type="submit"
                        name="addWarehouse"
                        value="+ Add New Warehouse"
                        />
                    </Link>
                </form>
            </section>
            <section className="listing__labels-container">
                <Labels  name="WAREHOUSE" />
                <Labels  name="ADDRESS" />
                <Labels  name="CONTACT NAME" />
                <Labels  name="CONTACT INFORMATION" />
                <Labels  name="ACTIONS" />
            </section>
            {warehouseList.map(item => {
                return (
                        <ListingCard data={item} />
                )
            })}
        </section>
    )
}

export default Listing






