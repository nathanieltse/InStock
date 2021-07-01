import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/PageFooter/PageFooter'
import './InventoryPage.scss'
// import InventoryForm from "../../components/InventoryForm/InventoryForm"

class InventoryPage extends Component {
    render () {
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <BrowserRouter>
                    <section className="inventory-wrapper">
                        <Switch>
                            {/* <Route path="api/inventory/:inventoryId" component={InventoryForm} /> */}
                        </Switch>
                    </section>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}

export default InventoryPage