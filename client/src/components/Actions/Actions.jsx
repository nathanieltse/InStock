import React from 'react'
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import {Link} from "react-router-dom"
import "./Actions.scss"

function Actions({ editPath, showDeleteModal }) {
    
    return (
        <section className="actions" >
            <Link className="actions__link">
                <img
                    className="actions__delete"
                    src={deleteIcon}
                    alt="Delete Icon" onClick={showDeleteModal}
                />
            </Link> 
            <Link className="actions__link" to={editPath}>
                <img
                    className="actions__edit"
                    src={editIcon}
                    alt="Edit Icon"
                />
            </Link>
            
        </section>
    )
}

export default Actions
