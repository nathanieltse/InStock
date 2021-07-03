import { Component } from 'react';
import axios from 'axios';
import Labels from '../Labels/Labels';
import ListingCard from "../../components/ListingCard/ListingCard"
import MainHeader from '../MainHeader/MainHeader'
import "../WarehouseDetails/WarehouseDetails.scss"
import Modal from "../Modal/Modal"

class WarehouseDetails extends Component{
    state={
        warehouse: null,
        inventoryList:null,
        displayModal: false,
        currentInventory: null,
    }

    deleteInventory = (id) => {
        console.log(id);
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            console.log(res)
        axios.get(`/api/inventory`)
            .then(res=> {
                this.setState({
                    inventoryList: res.data
                })
            }
                )
        })
    }
    
    showInventoryModal = (inventory) => {
        this.setState
        ({ displayModal: true,
            currentInventory: inventory
         })
    }

    hideModal = () =>{
        this.setState({ displayModal: false, currentInventory: null })
    }
    
    componentDidMount() {
    const { warehouseId } = this.props.match.params
        axios
            .get(`/api/warehouses/${warehouseId}`)
            .then(res =>{
                this.setState({warehouse:res.data})
                return axios.get(`/api/warehouses/${warehouseId}/inventory`)
            })
            .then(res => this.setState({inventoryList :res.data}))
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
                    </div>
                    <div className="warehouse-detail__detail-container">
                        <h4 className="warehouse-detail__title">CONTACT NAME:</h4>
                        <p className="warehouse-detail__text">{warehouse.contact.name}</p>
                        <p className="warehouse-detail__text">{warehouse.contact.position}</p>
                        
                    </div>
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
                        <ListingCard key={item.id} data={item} pagePath="warehouse/inventory" showInventoryModal={this.showInventoryModal}/>
                    )
                })}
                 <Modal displayModal={this.state.displayModal} hideModal={this.hideModal}
                showInventoryModal={this.showInventoryModal} currentInventory={this.state.currentInventory} deleteInventory={this.deleteInventory}></Modal>
            </section>
            
            :
            <p>Please wait...</p>
            
        )}
}

export default WarehouseDetails
