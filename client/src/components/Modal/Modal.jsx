import React from 'react';
import "../Modal/Modal.scss";
import close from "../../assets/Icons/close-24px.svg";
import { Link } from "react-router-dom"

const Modal = ({ hide, display, currentWarehouse}) => {
    if (currentWarehouse==null || !display ) {
        return null;
    } 
    return (
        <>
        <div className="modal display-block">
            <section className='modal-main'>
            <img className="modal-image__style" src={close} alt="cancel-image" onClick={hide}/>
            <div className="modal-body-container__style">
                <h1 className="modal-title__style">Delete {currentWarehouse.name} warehouse?</h1>
                <p>Please confirm that you'd like to delete the {currentWarehouse.name} from the list of warehouses. You won't be able to undo this action.</p>
                <div className="modal-button__container">
                    
                    <button className="delete-button__style">
                        Delete
                    </button>
                    <button className="cancel-button__style"
                        onClick={hide}
                    >
                        Cancel
                    </button>
            </div>
          </div>
        </section>
      </div>
      </>
    )
}


export default Modal
