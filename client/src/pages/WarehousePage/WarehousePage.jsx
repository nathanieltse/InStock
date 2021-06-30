import { Component } from 'react';
import {Link} from "react-router-dom"
import PageHeader from '../../components/PageHeader/PageHeader'
import "./WarehousePage.scss"


class WarehouseMainDisplay extends Component {
    
    render(){
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <section className="warehouse-wrapper">
                </section>
            </>
        )
    }
}

export default WarehouseMainDisplay
