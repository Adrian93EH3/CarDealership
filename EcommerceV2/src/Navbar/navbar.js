import React from "react"
import {Link} from "react-router-dom";


const Nav = () => {

    return (
      <header className="header">
        <img className="logo" src="Cars/logo.jpeg" alt="logo" /><a href=""></a><a href=""></a>
          <ul className="nav">
            <li><Link className="current" to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </header>       
    );
  }


export default Nav;