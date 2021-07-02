<<<<<<< HEAD
import { Component } from 'react';
=======
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../../App.scss"
>>>>>>> 57bce1040e5e412f5c96eddcf261ce3fd06d56d3
import axios from 'axios';
import Labels from '../Labels/Labels';
import ListingCard from "../../components/ListingCard/ListingCard"
import MainHeader from '../MainHeader/MainHeader'
import "../WarehouseDetails/WarehouseDetails.scss"

class WarehouseDetails extends Component{
    state={
        warehouse: null,
        inventoryList:null,
        listingColumn:["INVENTORY", "CATEGORY", "STATUS", "QTY", "ACTIONS"]
    }
        
    
        componentDidMount() {
<<<<<<< HEAD
        const { warehouseId } = this.props.match.params
            axios
                .get(`/api/warehouses/${warehouseId}`)
                .then(res =>{
                    this.setState({warehouse:res.data})
                    return axios.get(`/api/warehouses/${warehouseId}/inventory`)
                })
                .then(res => this.setState({inventoryList:res.data}))
                .catch(error=> console.log(error))
    }

    render(){
        const { warehouse, inventoryList } = this.state
        return (
            this.state.warehouse && this.state.inventoryList?
            <section className="warehouse-detail">
                <MainHeader navigate={this.props} headerName={warehouse.name}/>
                <article className="warehouse-detail__wrapper">
                    <div className="warehouse-detail__detail-container warehouse-detail__detail-container--primary">
                        <h4 className="warehouse-detail__title">WAREHOUSE ADDRESS: </h4>
                        <p className="warehouse-detail__text">{warehouse.address}</p>
                        <p className="warehouse-detail__text">{warehouse.city}, {warehouse.country}</p>  
=======
            const { warehouseId } = this.props.match.params;
            console.log(this.props)
            this.getWarehouse(warehouseId)
        }

        render(){
            if (this.state.warehouse===null){
                return <span className="loading__message">Please wait...</span>
            }
    
            const { warehouse } = this.state
          
        return (
            <>
            <article className="wd-container">
                <div className="wd-wrapper__style">
                <div wd-header__style>
                    <WarehouseDetailsHeader warehouse={warehouse} />
                </div>
                    <Link to={`/warehouses/${warehouse.id}/edit`}>
                        <button className="pseudo-wd-button__style"><img className="wd-edit-icon__style" src={editIcon} alt="edit icon"/></button>
                    </Link>

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
>>>>>>> 57bce1040e5e412f5c96eddcf261ce3fd06d56d3
                    </div>
                    <div className="warehouse-detail__detail-container">
                        <h4 className="warehouse-detail__title">CONTACT NAME:</h4>
                        <p className="warehouse-detail__text">{warehouse.contact.name}</p>
                        <p className="warehouse-detail__text">{warehouse.contact.position}</p>
                        
                    </div>
<<<<<<< HEAD
                    <div className="warehouse-detail__detail-container">
                        <h4 className="warehouse-detail__title">CONTACT INFORMATION: </h4>
                        <p className="warehouse-detail__text">{warehouse.contact.phone}</p>
                        <p className="warehouse-detail__text">{warehouse.contact.email}</p>
                    </div>
                </article>

                <section className="listing__labels-container">
                    {this.props.listingColumn.map((column, index) => {
                        return <Labels key={index} name={column} />
                    })}
                </section>

                {inventoryList.map(item => {
                    return (
                        <ListingCard key={item.id} data={item} pagePath="warehouse/inventory" />
                    )
                })}
            </section>
            :
            <p>Please wait...</p>
            
        )}
}
=======
                    </main>
                </div>
                </article>
        </>
           
    )       
                }
    }
>>>>>>> 57bce1040e5e412f5c96eddcf261ce3fd06d56d3

export default WarehouseDetails
