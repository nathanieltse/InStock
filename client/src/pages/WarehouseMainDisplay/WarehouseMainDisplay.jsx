import { Component } from 'react';
import { Link } from "react-router-dom"
import { getWarehouses } from "../../utils/api.js"
import PageHeader from '../../components/PageHeader/PageHeader'
import "../../App.scss"
import WarehouseList from "../../components/WarehouseList/WarehouseList"


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
            <section>
                <PageHeader />
                <WarehouseList warehouseList={this.state.warehouseList}/>
            </section>
        )
    }
}

export default WarehouseMainDisplay
