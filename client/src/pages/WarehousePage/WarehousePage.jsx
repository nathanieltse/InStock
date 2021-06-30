import { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import Footer from '../../components/PageFooter/PageFooter'
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse"
import EditWarehouseForm from '../../components/EditWarehouseForm/EditWarehouseForm'
import "./WarehousePage.scss"



class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: []
    }

    componentDidMount = () => {
        getWarehouses()
            .then(res => {
                console.log(res.data)
                this.setState({ warehouseList: res.data })
            }).catch(err => {
                console.log(err)
            })
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
