import { Component } from 'react'
import { getWarehouses } from "../../utils/api.js"
import "./WarehouseList.scss";
import WarehouseListCard from "../WarehouseListCard/WarehouseListCard"

export default class WarehouseList extends Component {
    state = {
        warehouseList: []
    }

    componentDidMount = () => {
        getWarehouses()
            .then(res => {
                console.log(res.data)
                this.setState({warehouseList: res.data})
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <section className="warehouse">
                <section className="warehouse__header">
                    <h1 className="warehouse__title">Warehouses</h1>
                    <form className="warehouse__form">
                        <input
                            className="warehouse__form-input warehouse__form-input--search"
                            type="text"
                            name="search"
                            placeholder="Search..."
                        />
                        <input
                            className="warehouse__form-input warehouse__form-input--submit"
                            type="submit"
                            name="addWarehouse"
                            value="+ Add New Warehouse"
                        />
                    </form>
                </section>
                {this.state.warehouseList.map(item => {
                    return (
                        <WarehouseListCard warehouse={item}/>
                    )
                })}  
            </section>
        )
    }
}


