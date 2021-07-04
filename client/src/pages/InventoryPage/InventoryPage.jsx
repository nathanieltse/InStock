import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import './InventoryPage.scss'
import Modal from "../../components/Modal/Modal"
import InventoryForm from "../../components/InventoryForm/InventoryForm"
import InventoryDetail from "../../components/InventoryDetail/InventoryDetail"

class InventoryPage extends Component {
    state={
        inventoryList:[],
        displayModal: false,
        currentInventory: null,
    }

    deleteInventory = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            console.log(res)
            this.hideModal()
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

    componentDidMount(){
        axios.get(`/api/inventory`)
        .then(res => this.setState({inventoryList: res.data}))
        .catch(error => console.log(error))
    }

    render () {
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <Modal 
                    displayModal={this.state.displayModal} 
                    hideModal={this.hideModal}
                    showInventoryModal={this.showInventoryModal} 
                    currentInventory={this.state.currentInventory} 
                    deleteInventory={this.deleteInventory}>
                </Modal>
                <BrowserRouter>
                    <Switch>
                        <section className="inventory-wrapper">
                                <Route exact path="/inventory" render={routeProps => {
                                    return <Listing 
                                                showInventoryModal={this.showInventoryModal} 
                                                dataList={this.state.inventoryList} 
                                                pagePath="inventory" 
                                                addItemPath="/inventory/add"
                                                addItemValue="+ Add New Inventory"
                                                listingColumn={["INVENTORY", "CATEGORY", "STATUS", "QTY", "WAREHOUSE" , "ACTIONS"]}
                                                {...routeProps}/>
                            }} />
                            <Route path="/inventory/:inventoryId/detail" component={InventoryDetail}/>
                            <Route path="/inventory/add" component={InventoryForm} />
                            <Route path="/inventory/:inventoryId/edit" component={InventoryForm} />
                        </section>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}

export default InventoryPage