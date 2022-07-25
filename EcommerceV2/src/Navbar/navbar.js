import React from "react"
import {Link} from "react-router-dom";


const Nav = () => {

  const handleClick = event => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('current');
    
    // 👇️ remove class on click
      event.currentTarget.classList.remove('current');
  };

    return (
      <header className="header">
        <img className="logo" src="Cars/logo.jpeg" alt="logo" /><a href=""></a><a href=""></a>
          <ul className="nav">
            <li><Link onClick={handleClick} to="/">Home</Link></li>
            <li><Link onClick={handleClick} to="/inventory">Inventory</Link></li>
            <li><Link onClick={handleClick} to="/contact">Contact</Link></li>
          </ul>
        </header>       
    );
  }


export default Nav;