import './App.scss';
import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WarehouseMainDisplay from '../src/pages/WarehouseMainDisplay/WarehouseMainDisplay'
import WarehouseList from '../src/pages/WarehouseList/WarehouseList'



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
