import './App.scss';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from './pages/InventoryPage/InventoryPage'
import Footer from './components/PageFooter/PageFooter'
import WarehouseForm from './components/WarehouseForm/WarehouseForm'



const App = () => {
    return (
      <div className="app__body">
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WarehousePage}/>
            <Route path="/inventory" component={InventoryPage}/>

            {/* <Route exact path="/" component={WarehouseList}/> */}
          </Switch>
      </BrowserRouter>
      <WarehouseForm/>
      <Footer />
      </div>
    )
}

export default App;
