import React from 'react'
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import "./DeleteEditCard.scss"

function DeleteEdit() {
    return (
        <section className="icons">
            <img
                className="icons__delete"
                src={deleteIcon}
                alt="Delete Icon"
            />
            <img
                className="icons__edit"
                src={editIcon}
                alt="Edit Icon"
            />
        </section>
    )
}

export default DeleteEdit
