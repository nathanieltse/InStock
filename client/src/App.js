import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WarehouseList from "../../src/pages/WarehouseList";
import WarehouseMainDisplay from "../../src/pages/WarehouseMainDisplay";



class App extends Component{
 
  render(){
 
  return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={WarehouseList}/>

          <Route path="/" component={WarehouseMainDisplay}/>

        </Switch>
    </BrowserRouter>
  )}
}

export default App;
