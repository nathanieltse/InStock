import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from './pages/InventoryPage/InventoryPage'




class App extends Component{
  
  render(){
  return (
    <div className="app__body">
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={WarehousePage}/>
          <Route path="/inventory" component={InventoryPage}/>
          <Route path="/warehouses/:warehouseId" component={WarehouseDetails}/>

        </Switch>
      </BrowserRouter>
    
    </div>
  )}
}

export default App;
