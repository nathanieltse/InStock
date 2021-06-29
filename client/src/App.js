import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import WarehouseList from "../src/pages/WarehouseList/WarehouseList";
import WarehouseMainDisplay from "./pages/WarehouseMainDisplay/WarehouseMainDisplay";
import InventoryPage from './pages/InventoryPage/InventoryPage'
import Footer from './components/PageFooter/PageFooter'



class App extends Component{
 
  render(){
 
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WarehouseMainDisplay}/>
          <Route path="/inventory" component={InventoryPage}/>

          {/* <Route exact path="/" component={WarehouseList}/> */}
        </Switch>
    </BrowserRouter>
    <Footer />
    </div>
  )}
}

export default App;
