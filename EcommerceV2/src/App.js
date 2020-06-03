import React from 'react';
import './App.css';
import Inventory from './Inventory/inventory.js'
import Contact from './Contact/contact.js'
import SlideShow from './Slider/slider';

class App extends React.Component {
  render() {
    if (window.location.pathname === '/inventory.html') {
      return (<Inventory/>);
    } else if (window.location.pathname === '/contact.html'){
      return(<Contact/>);
    } else {
      console.log("This is the home page!");
    }
    return (
      <React.Fragment>
        <header className="header">
        <img className="logo" src="Cars/logo.jpeg" alt="logo" /><a href=""></a><a href=""></a>
          <ul className="nav">
            <li><a className="current" href="#">Home</a></li>
            <li><a href="inventory.html">Inventory</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </header>
        <SlideShow/>	
        <h1 className="featureItems">Featured Vehicles</h1>
        <div className="feature">
          <article className="child">
            <img className="child--image" src="Cars/evo.jpg" alt="picture_of_1993_evolution_II"/>
            <h4> 1993 Mitsubishi Evolution II </h4>
            <p> This bright yellow Evo III comes bone stock. With a whopping 266whp and a tremendous AWD system, this car is rowdy. Exterior and Interior 10/10 with 35K verified miles.</p>
            <h5 className="price">Offer: $30,000</h5>
          </article>
          <article className="child">
            <img className="child--image" src="Cars/supra2.jpg" alt="picture_of_2019_supra_rz"/>
            <h4> 1993 Toyota Supra RZ </h4>
            <p> This Supra comes tastefully modified and well maintained. Drives hard and runs perfectly. Exterior and Interior 10/10 with 55K verified chassis miles Engine has been swapped.</p>
            <h5 className="price">Offer: $70,000</h5>
          </article>
          <article className="child">
            <img className="child--image" src="Cars/supra.jpg" alt="picture_of_1993_supra_sz"/>
            <h4> 1993 Toyota Supra SZ </h4>
            <p> Lightly modified Supra, with a gorgeous Midnight Purple III color change. Paint is brand new, interior is immaculate and exterior has a few dings. This Supra has 62K verified miles.</p>
            <h5 className="price"> Offer: $45,000</h5>
          </article>
        </div>
        <footer className="footer1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <ul className="ul-2">
            <li><a className="facebook" href="http://facebook.com/" target="_blank"><i className="fa fa-fw fa-2x fa-inverse fa-facebook"></i></a></li>
            <li><a className="twitter" href="http://twitter.com/" target="_blank"><i className="fa fa-fw fa-2x fa-inverse fa-twitter"></i></a></li>
            <li><a className="instagram" href="https://www.instagram.com/" target="_blank"><i className="fa fa-fw fa-2x fa-inverse fa-instagram"></i></a></li>
          </ul>
          <a className="a" href="#" id="footer">
          </a>
          <h3> &copy;2020 || Adrian D. Diaz</h3>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;