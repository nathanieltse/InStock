import React from 'react'
import Actions from "../Actions/Actions"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import "./WarehouseListCard.scss"
import { Link } from "react-router-dom";

function WarehouseListCard({warehouse}) {
            return (
                <section className="card">
                    <div className="card-listItem" key={warehouse.id}>
                        <section className="card-listItem">
                            <h4 className="card-listItem__title">WAREHOUSE</h4>
                            <h3 className="card-listItem__text card-listItem__text-name">{warehouse.name}
                                <Link to={`/warehouses/${warehouse.id}`} >
                                    <img className="card-listItem__text-img" src={chevron} />
                                </Link>
                            </h3>
                        </section>
                        <section className="card-listItem card-listItem__address">
                            <h4 className="card-listItem__title">ADDRESS</h4>
                            <p className="card-listItem__text">{warehouse.address} ,</p>
                            <p className="card-listItem__text" >{warehouse.city}, {warehouse.country}</p>
                        </section>
                        <section className="card-listItem">
                            <h4 className="card-listItem__title">CONTACT NAME</h4>
                            <p className="card-listItem__text">{warehouse.contact.name}</p>
                        </section>
                        <section className="card-listItem">
                            <h4 className="card-listItem__title">WAREHOUSE</h4>
                            <p className="card-listItem__text">{warehouse.contact.phone}</p>
                            <p className="card-listItem__text">{warehouse.contact.email}</p>
                        </section>
                    </div>
                    <Actions />
                </section>
            )
}

export default WarehouseListCard
