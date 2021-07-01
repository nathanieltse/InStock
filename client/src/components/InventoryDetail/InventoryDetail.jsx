import React from 'react'
import "./InventoryDetail.scss"

const status = false;

function InventoryDetail() {
    return (
        <div className="inventoryDetail">
            <div className="inventoryDetail__left">
                <section className="inventoryDetail__left-section">
                    <h4 className="inventoryDetail__left-title" >ITEM DESCRIPTION</h4>
                    <p>This is dummy data waiting for inventory page</p>

                    <h4 className="inventoryDetail__left-title" >CAtEGORY</h4>
                    <p>Electronics</p>
                </section>
            </div>
            <div className="inventoryDetail__right">
                <section className="inventoryDetail__right-section">
                    <h4 className= "inventoryDetail__right-title">STATUS</h4>
                    <p className={`inventoryDetail__text--status ${status ? "inventoryDetail__text--stock" : "inventoryDetail__text--nostock"}`}>In Stock</p>
                    <h4 className="inventoryDetail__right-title" >WAREHOUSE</h4>
                    <p>Manhattan</p>
                </section>
                <section className="inventoryDetail__right-section">
                    <h4 className="inventoryDetail__right-title" >QUANTITY</h4>
                    <p>500</p>
                </section>
            </div>
        </div>
    )
}

export default InventoryDetail
