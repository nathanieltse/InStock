import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import Footer from '../../components/PageFooter/PageFooter'
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse"
import EditWarehouseForm from '../../components/EditWarehouseForm/EditWarehouseForm'
import "./WarehousePage.scss"
import axios from "axios"
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';



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
                            return <WarehouseList warehouseList={this.state.warehouseList} {...routeProps}/>
                        }}/>
                        <Route path="/warehouses/add" component={AddWarehouse} />
                        <Route path="/warehouses/:warehousesId/edit" component={EditWarehouseForm}/>
                        <Route path="/warehouses/:warehouseId" component={WarehouseDetails}/>
                        {/* <WarehouseList warehouseList={this.state.warehouseList} /> */}
                        
                    </section>

                    </Switch>
                </BrowserRouter>
                <Footer />
                
            </>
        )
    }
}

export default WarehouseMainDisplay
