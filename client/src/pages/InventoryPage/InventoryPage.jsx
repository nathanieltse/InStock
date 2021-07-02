import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import './InventoryPage.scss'
import Modal from "../../components/Modal/Modal"

class InventoryPage extends Component {
    state={
        inventoryList:[],
        displayModal: false,
        currentInventory: null,
    }

    showDeleteModal = (inventory) => {
        this.setState
        ({ displayModal: true,
            currentInventory: inventory
         })
    }

    hideModal = () =>{
        this.setState({ displayModal: false })
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
                <Modal display={this.state.displayModal} hide={this.hideModal}
                showDeleteModal={this.showDeleteModal} currentInventory={this.state.currentInventory}>
                </Modal>
                <BrowserRouter>
                    <Switch>
                        <section className="inventory-wrapper">
                                <Route exact path="/inventory" render={routeProps => {
                                    return <Listing 
                                                showDeleteModal={this.showDeleteModal}
                                                route="inventory"
                                                display={this.state.displayModal} hide={this.hideModal}
                                                dataList={this.state.inventoryList} 
                                                path="inventory" 
                                                addItemPath="/inventory/add"
                                                addItemValue="+ Add New Warehouse"
                                                listingColumn={["INVENTORY", "CATEGORY", "STATUS", "QTY", "WAREHOUSE" , "ACTIONS"]}
                                                {...routeProps}/>
                                }}/>
                        </section>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}

export default InventoryPage