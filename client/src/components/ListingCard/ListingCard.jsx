import React from 'react'
import Actions from "../Actions/Actions"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import "./ListingCard.scss"
import { Link } from "react-router-dom";

function ListingCard({ data, path }) {
    return (
        path === "warehouse" ?
        <>
            <article className="listingcard" key={data.id}>
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
                    <Actions  path={data.id}/>
                </section>
            </article>
        </>
        :
        <>
            <article className="listingcard" key={data.id}>
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
                    <Actions  path={data.id}/>
                </section>
            </article>
        </>
    )
}


export default ListingCard
