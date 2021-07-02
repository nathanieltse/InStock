import React from 'react'
import Actions from "../Actions/Actions"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import "./ListingCard.scss"
import { Link } from "react-router-dom";

function ListingCard({ data, pagePath, showDeleteModal, display, hide, route }) {
    return (
        pagePath === "warehouse" ?
        <>
            <article className="listingcard">
                <section className="listingcard__item listingcard__item--head">
                    <h4 className="listingcard__title">WAREHOUSE</h4>
                        <Link className="listingcard__link" to={`/warehouses/${data.id}/detail`} >
                            <h3 className="listingcard__main-text">{data.name}</h3>
                            <img className="listingcard__arrow-icon" src={chevron} alt="expand warehouse detail"/>
                        </Link>
                </section>
                <section className="listingcard__item">
                    <h4 className="listingcard__title">CONTACT NAME</h4>
                    <p className="listingcard__text">{data.contact.name}</p>
                </section>
                <section className="listingcard__item listingcard__item--priority">
                    <h4 className="listingcard__title">ADDRESS</h4>
                    <p className="listingcard__text">{data.address}, {data.city}, {data.country}</p>
                </section>
                <section className="listingcard__item">
                    <h4 className="listingcard__title">WAREHOUSE</h4>
                    <p className="listingcard__text">{data.contact.phone}</p>
                    <p className="listingcard__text">{data.contact.email}</p>
                </section>
                <section className="listingcard__item">
                    <Actions path={data.id} warehouse={data} showDeleteModal={showDeleteModal} hide={hide} display={display}/>
                </section>
            </article>
        </>
        :
        <>
            <article className="listingcard">
                <section className="listingcard__item listingcard__item--priority">
                    <h4 className="listingcard__title">INVENTORY ITEM</h4>
                        <Link className="listingcard__link" to={`/inventory/${data.id}`} >
                            <h3 className="listingcard__main-text">{data.itemName}</h3>
                            <img className="listingcard__arrow-icon" src={chevron} alt="expand warehouse detail"/>
                        </Link>
                </section>
                <section className="listingcard__item">
                    <h4 className="listingcard__title">STATUS</h4>
                    <p className={data.status === "In Stock" ? "listingcard__status--active" : "listingcard__status--inactive"}>{data.status.toUpperCase()}</p>
                </section>
                <section className="listingcard__item listingcard__item--secondary">
                    <h4 className="listingcard__title">CATEGORY</h4>
                    <p className="listingcard__text">{data.category}</p>
                </section>
                <section className="listingcard__item">
                    <h4 className="listingcard__title">QTY</h4>
                    <p className="listingcard__text">{data.quantity}</p>
                </section>
                <section className="listingcard__item listingcard__item-warehouse">
                    <h4 className="listingcard__title">WAREHOUSE</h4>
                    <p className="listingcard__text">{data.warehouseName}</p>
                </section>
                <section className="listingcard__item">
                    <Actions  path={data.id} route="inventory" inventory={data} showDeleteModal={showDeleteModal} hide={hide} display={display}/>
                </section>
            </article>
        </>
    )
}


export default ListingCard
