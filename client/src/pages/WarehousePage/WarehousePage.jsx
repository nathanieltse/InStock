import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';
import "./WarehousePage.scss"
import Modal from "../../components/Modal/Modal"
import InventoryDetail from "../../components/InventoryDetail/InventoryDetail"
import { getWarehouses } from '../../utils/api';


class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: [],
        displayModal: false,
        currentWarehouse: null,
    }

    deleteWarehouse = (id) => {
        console.log(id);
        axios.delete(`/api/warehouses/${id}`)
        .then(res => {
            console.log(res)
            this.hideModal()
            getWarehouses()
            .then(res=> {
                this.setState({
                    warehouseList: res.data
                })
            }
                )
        })
    }
        
    showWarehouseModal = (warehouse) => {
        this.setState
        ({ displayModal: true,
            currentWarehouse: warehouse
         })
    }

    hideModal = () =>{
        this.setState({ displayModal: false })
    }

    componentDidMount() {
        axios.get(`/api/warehouses`)
            .then(res => res.data)
            .then(data => {
                this.setState({
                    warehouseList: data,
                });
            })
            .catch(error => { console.log(error) })
    }

    render() {
      
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <Modal 
                    displayModal={this.state.displayModal} 
                    hideModal={this.hideModal}
                    showWarehouseModal={this.showWarehouseModal} 
                    currentWarehouse={this.state.currentWarehouse} 
                    deleteWarehouse={this.deleteWarehouse}>
                </Modal>
                <BrowserRouter>
                    <Switch>

                        <section className="warehouse-wrapper">
                            <Route exact path="/" render={routeProps => {
                                return <Listing
                                    showWarehouseModal={this.showWarehouseModal} 
                                    dataList={this.state.warehouseList}
                                    pagePath="warehouse"
                                    addItemPath="/warehouses/add"
                                    addItemValue="+ Add New Warehouse"
                                    listingColumn={["WAREHOUSE", "ADDRESS", "CONTACT NAME", "CONTACT INFORMATION", "ACTIONS"]}
                                    {...routeProps} />
                            }} />
                            <Route path="/warehouses/add" component={WarehouseForm} />
                            <Route path="/warehouses/:warehouseId/detail" render={routeProps => {
                                return <WarehouseDetails
                                            display={this.state.displayModal} hide={this.hideModal}
                                            showWarehouseModal={this.showWarehouseModal}  
                                            listingColumn={["INVENTORY", "CATEGORY", "STATUS", "QTY", "ACTIONS"]}
                                            {...routeProps}/>
                            }} />
                            <Route path="/warehouses/:warehousesId/edit" component={WarehouseForm} />
                            <Route path="/inventory/:inventoryId/detail" component={InventoryDetail} />

                        </section>

                    </Switch>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}

export default WarehouseMainDisplay
