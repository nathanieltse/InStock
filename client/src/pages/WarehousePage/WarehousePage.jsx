import { Component } from 'react';
import { Link } from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import "./WarehousePage.scss"
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import axios from 'axios';



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
                <section className="warehouse-wrapper">
                    <WarehouseList warehouseList={this.state.warehouseList}/>
                </section>
            </>
        )
    }
}

export default WarehouseMainDisplay
