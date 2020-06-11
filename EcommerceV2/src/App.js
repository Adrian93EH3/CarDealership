import React from 'react';
import './App.css';
import Inventory from './Inventory/inventory.js'
import Contact from './Contact/contact.js'
import Nav from './Navbar/navbar.js'
import Footer from './Footer/footer.js'
import Home from './Home/home.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
    );
  }
}

export default App;