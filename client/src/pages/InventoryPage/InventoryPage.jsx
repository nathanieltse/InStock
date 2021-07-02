import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import './InventoryPage.scss'
// import InventoryForm from "../../components/InventoryForm/InventoryForm"

class InventoryPage extends Component {
    state={
        inventoryList:[]
    }

    componentDidMount(){
        axios.get(`/api/inventory`)
        .then(res => this.setState({inventoryList: res.data}))
        .catch(error => console.log(error))
    }

    render () {
        console.log(this.state)
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <BrowserRouter>
                    <Switch>
                        <section className="inventory-wrapper">
                                <Route exact path="/inventory" render={routeProps => {
                                    return <Listing 
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