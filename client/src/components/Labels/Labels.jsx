import React from 'react'
import sort from "../../assets/Icons/sort-24px.svg"
import "./Labels.scss"

function WarehouseListLabels({name}) {
    return (
        <div className = "label">
            <h4
                className="label__title">{name}
            </h4>
            <img
                className={ name !== "ACTIONS" ? "label__img": "label__hide"}
                src={sort}
                alt="sort icon"
            />
        </div>
    )
}

export default WarehouseListLabels
