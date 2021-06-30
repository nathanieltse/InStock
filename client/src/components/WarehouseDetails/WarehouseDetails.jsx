import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import "../../App.scss"
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import axios from 'axios';
import WarehouseDetailsHeader from '../../components/WarehouseDetailsHeader/WarehouseDetailsHeader'
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
    
                <div>
                    <WarehouseDetailsHeader warehouse={warehouse} />
                </div>
                <div className="details__container">
                    <main className="address__container">
                    <p className="warehouse-address__style">WAREHOUSE ADDRESS: {warehouse.address}</p>
                    </main>
                    <div>
                        <p className="contact-name__style">CONTACT NAME:{warehouse.contact.name}</p>
                        <p className="contact-position__style">{warehouse.contact.position}</p>
                    </div>
                    <div>
                        <p className="contact-phone__style">CONTACT INFORMATION:{warehouse.contact.phone}</p>
                        <p className="contact-email__style">{warehouse.contact.email}</p>
                    </div>
                </div>
        </>
           
    )       
                }
    }

export default WarehouseDetails
