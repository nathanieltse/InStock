import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import WarehouseList from "../src/pages/WarehouseList/WarehouseList";
import WarehouseMainDisplay from "../src/pages/WarehouseMainDisplay/WarehouseMainDisplay";



class App extends Component{
 
  render(){
 
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WarehouseMainDisplay}/>
          <Route path="/inventory" component=""/>

          {/* <Route exact path="/" component={WarehouseList}/> */}

        </Switch>
    </BrowserRouter>
    <h1>In Stock</h1>
    </div>
  )}
}

export default App;
