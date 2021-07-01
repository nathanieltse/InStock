import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import Footer from '../../components/PageFooter/PageFooter'
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse"
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import "./WarehousePage.scss"



class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: []
    }

    componentDidMount = () => {
        getWarehouses()
            .then(res => {
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
                        <Route path="/warehouses/add" component={WarehouseForm} />
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
