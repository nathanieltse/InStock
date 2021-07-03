import React from 'react';
import "../Modal/Modal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

const Modal = ({ hide, display, currentWarehouse, currentInventory, hideModal, displayModal, deleteWarehouse, deleteInventory }) => {
  

    if (currentWarehouse===null || !display && !displayModal ) {
        return null;
    } 
    
    
    return (
        currentWarehouse ? 
        <>
        <div className="modal display-block">
            <section className='modal-main'>
                <img className="modal-image__style" src={closeIcon} alt="cancel" onClick={hide}/>
                <div className="modal-container__style">
                    <h1 className="modal-title__style">Delete {currentWarehouse.name} warehouse?</h1>
                    <p className="modal-body__style">Please confirm that you'd like to delete the {currentWarehouse.name} from the list of warehouses. You won't be able to undo this action.</p>
                    <div className="modal-button__container">                        
                        <button className="delete-button__style" onClick={()=>deleteWarehouse(currentWarehouse.id)}>
                            Delete
                        </button>
                        <button className="cancel-button__style" onClick={hide}>
                            Cancel
                        </button>
                    </div>
                </div>
            </section>
      </div>
      </>

      :

      <>
        <div className="modal display-block">
            <section className='modal-main'>
                <img className="modal-image__style" src={closeIcon} alt="cancel" onClick={hideModal}/>
                <div className="modal-container__style">
                    <h1 className="modal-title__style">Delete {currentInventory.itemName} inventory item?</h1>
                    <p className="modal-body__style">Please confirm that you'd like to delete the {currentInventory.itemName} from the inventory list. You won't be able to undo this action.</p>
                    <div className="modal-button__container">                        
                        <button className="delete-button__style" onClick={()=>deleteInventory(currentInventory.id)}>
                            Delete
                        </button>
                        <button className="cancel-button__style" onClick={hideModal}>
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
