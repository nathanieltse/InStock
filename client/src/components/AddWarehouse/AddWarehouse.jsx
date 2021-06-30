import React from 'react'
import WarehouseAddForm from "../WarehouseAddForm/WarehouseAddForm"
import MainHeader from "../MainHeader/MainHeader"


function AddWarehouse(props) {
    
    return (
        <div>
            <MainHeader navigate={props}/>
            <WarehouseAddForm
            />
        </div>
    )
}

export default AddWarehouse
