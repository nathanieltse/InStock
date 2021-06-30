import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from './pages/InventoryPage/InventoryPage'
import Footer from './components/PageFooter/PageFooter'
import AddWarehouse from "./components/AddWarehouse/AddWarehouse"
import EditWarehouseForm from './components/EditWarehouseForm/EditWarehouseForm'




class App extends Component{
  
  render(){
  return (
    <div className="app__body">
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={WarehousePage}/>
          <Route path="/warehouses/add" component={AddWarehouse} />
          <Route path="/warehouses/:warehousesId/edit" component={EditWarehouseForm}/>
          <Route path="/inventory" component={InventoryPage}/>

        </Switch>
    </BrowserRouter>
    <Footer />
    </div>
  )}
}

export default App;
