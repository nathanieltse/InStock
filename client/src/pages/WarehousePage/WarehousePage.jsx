import { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';
import "./WarehousePage.scss"
import Modal from "../../components/Modal/Modal"

//testing  
import InventoryForm from "../../components/InventoryForm/InventoryForm"

class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: [],
        displayModal: false,
        currentWarehouse: null,
    }
    
    showDeleteModal = (warehouse) => {
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
                <Modal display={this.state.displayModal} hide={this.hideModal}
                showDeleteModal={this.showDeleteModal} currentWarehouse={this.state.currentWarehouse}>
                </Modal>
                <BrowserRouter>
                    <Switch>
                    
                    <section className="warehouse-wrapper">
                        <Route exact path="/" render={routeProps => {
                            return <Listing 
                                        showDeleteModal={this.showDeleteModal}
                                        display={this.state.displayModal} hide={this.hideModal}
                                        dataList={this.state.warehouseList} 
                                        pagePath="warehouse" 
                                        addItemPath="/warehouses/add"
                                        addItemValue="+ Add New Warehouse"
                                        listingColumn={["WAREHOUSE", "ADDRESS", "CONTACT NAME", "CONTACT INFORMATION", "ACTIONS" ]} 
                                        {...routeProps}/>
                        }}/>
                        <Route path="/warehouses/add" component={WarehouseForm} />
                        <Route path="/warehouses/:warehouseId/detail" component={WarehouseDetails}/>
                        <Route path="/warehouses/:warehousesId/edit" component={WarehouseForm}/>
                        
                    </section>
                
                    </Switch>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}

export default WarehouseMainDisplay
