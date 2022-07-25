import React from "react"
import {Link} from "react-router-dom";


const Nav = () => {

  const handleClick = event => {
    
    // 👇️ remove class on click
      document.getElementById("home").classList.remove('current');
      document.getElementById("inv").classList.remove('current');
      document.getElementById("contact").classList.remove('current');
    // 👇️ toggle class on click
      event.currentTarget.classList.toggle('current');
  };

    return (
      <header className="header">
        <img className="logo" src="Cars/logo.jpeg" alt="logo" /><a href=""></a><a href=""></a>
          <ul className="nav">
            <li><Link id="home" onClick={handleClick} to="/">Home</Link></li>
            <li><Link id="inv" onClick={handleClick} to="/inventory">Inventory</Link></li>
            <li><Link id="contact" onClick={handleClick} to="/contact">Contact</Link></li>
          </ul>
        </header>       
    );
  }


export default Nav;