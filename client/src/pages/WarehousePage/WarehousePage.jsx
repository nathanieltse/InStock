import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import axios from "axios"
import PageHeader from '../../components/PageHeader/PageHeader'
import Listing from "../../components/Listing/Listing"
import Footer from '../../components/PageFooter/PageFooter'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';
import "./WarehousePage.scss"

//testing  
import InventoryForm from "../../components/InventoryForm/InventoryForm"

class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: [],
    }

    componentDidMount(){
        axios.get(`/api/warehouses`)
        .then(res => res.data)
        .then(data => {
          this.setState({
            warehouseList: data,
          });
        })
        .catch(error=>{console.log(error)})
    }

    render(){
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <BrowserRouter>
                    <Switch>
                    
                    <section className="warehouse-wrapper">
                        <Route exact path="/" render={routeProps => {
                            return <Listing 
                                        dataList={this.state.warehouseList} 
                                        pagePath="warehouse" 
                                        addItemPath="/warehouses/add"
                                        addItemValue="+ Add New Warehouse"
                                        listingColumn={["WAREHOUSE", "ADDRESS", "CONTACT NAME", "CONTACT INFORMATION", "ACTIONS" ]} 
                                        {...routeProps}/>
                        }}/>
                        <Route path="/warehouses/add" component={InventoryForm} />
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
