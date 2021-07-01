import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import "../../App.scss"
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import axios from 'axios';
import WarehouseDetailsHeader from '../../components/WarehouseDetailsHeader/WarehouseDetailsHeader'
import editIcon from "../../assets/Icons/edit-24px.svg"
import "../WarehouseDetails/WarehouseDetails.scss"

class WarehouseDetails extends Component{

        state={
            warehouse: null,
        }

        getWarehouse(warehouseId) {
            return axios.get(`/api/warehouses/${warehouseId}`)
            .then(res => res.data)
            .then(data => {
              
              this.setState({
                warehouse: data,
              })
            })
            .catch(error=>{console.log(error)})
        }
        
    
        componentDidMount() {
            const { warehouseId } = this.props.match.params;
            console.log(this.props.match.params)
    
            this.getWarehouse(warehouseId)
        }
    
        componentDidUpdate(prevProps) {
            const { warehouseId } = this.props.match.params;
    
            if (warehouseId !== prevProps.warehouseId) {
                this.getWarehouse(warehouseId)
            }
        }

        render(){
            if (this.state.warehouse===null){
                return <span className="loading__message">Please wait...</span>
            }
    
            const { warehouse } = this.state
            console.log(warehouse)
          
        return (
            <>
                <div className="wd-wrapper__style">
                <div wd-header__style>
                    <WarehouseDetailsHeader warehouse={warehouse} />
                </div>
                    <Link to={`/warehouses/${warehouse.id}/edit`}>
                        <button className="wd-button__style"><img className="wd-edit-icon__style" src={editIcon} alt="edit icon"/>Edit</button>
                    </Link>
                </div>
                <div className="wd__container">
                    <main className="wd-address__container">
                        <span className="wd-address__header">WAREHOUSE ADDRESS: 
                            <p className="wd-address__style">{warehouse.address}</p>
                            <p className="wd-address__style">{warehouse.city}, {warehouse.country}</p>
                        </span>
                    </main>
                <main className="wd-contact-info__wrapper">
                    <div className="wd-contact-name__container">
                        <span className="wd-contact-name__header">CONTACT NAME:
                            <p className="wd-contact-name__style">{warehouse.contact.name}</p>
                            <p className="wd-contact-position__style">{warehouse.contact.position}</p>
                        </span>
                    </div>
                    <div>
                        <span className="wd-contact-phone__header">CONTACT INFORMATION: 
                            <p className="wd-contact-phone__style">{warehouse.contact.phone}</p>
                            <p className="wd-contact-email__style">{warehouse.contact.email}</p>
                        </span>
                    </div>
                    </main>
                </div>
        </>
           
    )       
                }
    }

export default WarehouseDetails
