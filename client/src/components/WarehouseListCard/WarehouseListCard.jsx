import React from 'react'
import Actions from "../Actions/Actions"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import "./WarehouseListCard.scss"
import { Link } from "react-router-dom";

function WarehouseListCard({ warehouse }) {
    return (
        <>
            <div className="card__list" key={warehouse.id}>
                <section className="card__listItem">
                    <h4 className="card__listItem-title">WAREHOUSE</h4>
                    <h3 className="card__listItem-text warehouse__listItem-text--name">{warehouse.name}
                        <Link to={`/warehouses/${warehouse.id}`} >
                            <img className="warehouse__listItem-text--img" src={chevron} alt="expand warehouse detail"/>
                        </Link>
                    </h3>
                </section>
                <section className="card__listItem warehouse__listItem-address">
                    <h4 className="card__listItem-title">ADDRESS</h4>
                    <p className="card__listItem-text">{warehouse.address} ,</p>
                    <p className="card__listItem-text" >{warehouse.city}, {warehouse.country}</p>
                </section>
                <section className="card__listItem">
                    <h4 className="card__listItem-title">CONTACT NAME</h4>
                    <p className="card__listItem-text">{warehouse.contact.name}</p>
                </section>
                <section className="card__listItem">
                    <h4 className="card__listItem-title">WAREHOUSE</h4>
                    <p className="card__listItem-text">{warehouse.contact.phone}</p>
                    <p className="card__listItem-text">{warehouse.contact.email}</p>
                </section>
            </div>
            <Actions path={warehouse.id}/>
        </>
    )
}


export default WarehouseListCard
