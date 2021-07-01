import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import Footer from '../../components/PageFooter/PageFooter'
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse"
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import "./WarehousePage.scss"
import axios from "axios"
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';



class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: [],
    }

<<<<<<< HEAD
    componentDidMount = () => {
        getWarehouses()
            .then(res => {
                this.setState({ warehouseList: res.data })
            }).catch(err => {
                console.log(err)
            })
    }
=======
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
>>>>>>> 92416536fc10c425aae8904eba2603fe15aba9c3

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
<<<<<<< HEAD
                        <Route path="/warehouses/add" component={WarehouseForm} />
                        <Route path="/warehouses/:warehousesId/edit" component={WarehouseForm}/>
=======
                        <Route path="/warehouses/add" component={AddWarehouse} />
                        <Route path="/warehouses/:warehousesId/edit" component={EditWarehouseForm}/>
                        <Route path="/warehouses/:warehouseId" component={WarehouseDetails}/>
                        {/* <WarehouseList warehouseList={this.state.warehouseList} /> */}
                        
>>>>>>> 92416536fc10c425aae8904eba2603fe15aba9c3
                    </section>

                    </Switch>
                </BrowserRouter>
                <Footer />
                
            </>
        )
    }
}

export default WarehouseMainDisplay
