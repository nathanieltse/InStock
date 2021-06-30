import React from 'react'
import Actions from "../Actions/Actions"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import "./WarehouseListCard.scss"
import { Link } from "react-router-dom";

function WarehouseListCard({warehouse}) {
            return (
                <section className="warehouse">
                    <div className="warehouse-listItem" key={warehouse.id}>
                        <section className="warehouse-listItem">
                            <h4 className="warehouse-listItem__title">WAREHOUSE</h4>
                            <h3 className="warehouse-listItem__text warehouse-listItem__text-name">{warehouse.name}
                                <Link to={`/warehouses/${warehouse.id}`} >
                                    <img className="warehouse-listItem__text-img" src={chevron} />
                                </Link>
                            </h3>
                        </section>
                        <section className="warehouse-listItem warehouse-listItem__address">
                            <h4 className="warehouse-listItem__title">ADDRESS</h4>
                            <p className="warehouse-listItem__text">{warehouse.address} ,</p>
                            <p className="warehouse-listItem__text" >{warehouse.city}, {warehouse.country}</p>
                        </section>
                        <section className="warehouse-listItem">
                            <h4 className="warehouse-listItem__title">CONTACT NAME</h4>
                            <p className="warehouse-listItem__text">{warehouse.contact.name}</p>
                        </section>
                        <section className="warehouse-listItem">
                            <h4 className="warehouse-listItem__title">WAREHOUSE</h4>
                            <p className="warehouse-listItem__text">{warehouse.contact.phone}</p>
                            <p className="warehouse-listItem__text">{warehouse.contact.email}</p>
                        </section>
                    </div>
                    <Actions />
                </section>
            )
}

export default WarehouseListCard
