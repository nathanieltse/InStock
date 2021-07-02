import React from 'react'
import "./WarehouseDetailsHeader.scss"
import { Link } from 'react-router-dom'
import backArrow from "../../assets/Icons/arrow_back-24px.svg"

function MainHeader({ warehouse }) {
    return (
        <div className="wd-main-header">
            <Link to="/">
                <img
                    className="main-header__img"
                    src={backArrow}
                    alt="Arrow Icon to go back a page"
                />
            </Link>
            <h1 className="wd-main-header__title">{warehouse.name}</h1>
        </div>
    )
}

export default MainHeader
