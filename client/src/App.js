import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from './pages/InventoryPage/InventoryPage'
import Footer from './components/PageFooter/PageFooter'
import EditWarehouseForm from './components/EditWarehouseForm/EditWarehouseForm'



const App = () => {
    return (
      <div className="app__body">
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WarehousePage}/>
            <Route path="/inventory" component={InventoryPage}/>
            <Route path="/warehouses/:warehousesId/edit" component={EditWarehouseForm}/>

            {/* <Route exact path="/" component={WarehouseList}/> */}
          </Switch>
      </BrowserRouter>
      <Footer />
      </div>
    )
}

export default App;
