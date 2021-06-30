import React from 'react'
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import {Link} from "react-router-dom"
import "./Actions.scss"

function DeleteEdit({path}) {
    return (
        <section className="icons">
            <img
                className="icons__delete"
                src={deleteIcon}
                alt="Delete Icon"
            />
            <Link to={`/warehouses/${path}/edit`}>
                <img
                    className="icons__edit"
                    src={editIcon}
                    alt="Edit Icon"
                />
            </Link>
        </section>
    )
}

export default DeleteEdit
