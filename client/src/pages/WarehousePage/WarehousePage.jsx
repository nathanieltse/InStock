import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import Footer from '../../components/PageFooter/PageFooter'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import "./WarehousePage.scss"
import axios from "axios"
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx';
import Modal from "../../components/Modal/Modal"



class WarehouseMainDisplay extends Component {

    state = {
        warehouseList: [],
        displayModal: false,
        currentWarehouse: null,
    }
    
    showDeleteModal = (warehouse) => {
        console.log(warehouse)
        this.setState
        ({ displayModal: true,
            currentWarehouse: warehouse
         })
    }

    hideModal = () =>{
        this.setState({ displayModal: false })
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
                <Modal display={this.state.displayModal} hide={this.hideModal}
                showDeleteModal={this.showDeleteModal} currentWarehouse={this.state.currentWarehouse}>
                </Modal>
                <BrowserRouter>
                    <Switch>
                    
                    <section className="warehouse-wrapper">
                        <Route exact path="/" render={routeProps => {
                            return <WarehouseList warehouseList={this.state.warehouseList}
                            showDeleteModal={this.showDeleteModal}
                            display={this.state.displayModal} hide={this.hideModal} {...routeProps}/>
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
