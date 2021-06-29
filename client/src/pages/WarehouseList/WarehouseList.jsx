import { Component } from 'react'
import { getWarehouses } from "../../utils/api.js"
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import search from "../../assets/Icons/search-24px.svg"
import "./WarehouseList.scss";

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
                            placeholder="Search"
                        />
                        {/* <img className="warehouse__form-search" src={search} /> */}
                        <input
                            className="warehouse__form-input warehouse__form-input--submit"
                            type="submit"
                            name="addWarehouse"
                            value="Add New Warehouse"
                        />
                    </form>
                </section>
                {this.state.warehouseList.map(item => {
                    return (
                        <>
                            <div className="warehouse__list" key={item.id}>
                                <section className="warehouse__listItem">
                                    <h4 className="warehouse__listItem-title">WAREHOUSE</h4>
                                    <h3 className="warehouse__listItem-text warehouse__listItem-text--name">{item.name} <img className="warehouse__listItem-text--img" src={chevron}/></h3>
                                </section>
                                <section className="warehouse__listItem warehouse__listItem-address">
                                    <h4 className="warehouse__listItem-title">ADDRESS</h4>
                                    <p className="warehouse__listItem-text">{item.address} ,</p>
                                    <p className="warehouse__listItem-text" >{item.city}, {item.country}</p>
                                </section>
                                <section className="warehouse__listItem">
                                    <h4 className="warehouse__listItem-title">CONTACT NAME</h4>
                                    <p className="warehouse__listItem-text">{item.contact.name}</p>
                                </section>
                                <section className="warehouse__listItem">
                                    <h4 className="warehouse__listItem-title">WAREHOUSE</h4>
                                    <p className="warehouse__listItem-text">{item.contact.phone}</p>
                                    <p className="warehouse__listItem-text">{item.contact.email}</p>
                                </section>
                            </div>
                            <section className="warehouse__listIcons">
                                <img
                                    className="warehouse__listIcons--delete"
                                    src={deleteIcon}
                                    alt="Delete Icon"
                                />
                                <img
                                    className="warehouse__listIcons--edit"
                                    src={editIcon}
                                    alt="Edit Icon"
                                />
                            </section>
                        </>
                    )
              })}  
            </section>
        )
    }
}
