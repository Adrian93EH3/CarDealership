import React from 'react';
const inventory = require ('./inventory.json'); 

class Inventory extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <header className="header">
                    <img className="logo" src="Cars/logo.jpeg" alt="logo" /><a href=""></a><a href=""></a>
                        <ul className="nav">
                            <li><a href="index.html">Home</a></li>
                            <li><a className="current" href="#">Inventory</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </header>
                    <h1 className="JDM">Inventory</h1>
                    <div className="parent">
                        {inventory.inventory.map((item, key) => {
                            return (
                                <article className="child">
                                    <img className="images" src={item.image}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                </article>
                            )})}
                    </div>
                    <footer className="footer1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <ul className="ul-2">
            <li><a className="facebook" href="http://facebook.com/" src="https://image.flaticon.com/icons/svg/254/254390.svg" alt="logo_of_facebook" target="_blank"><i className="fa fa-fw fa-2x fa-inverse fa-facebook"></i></a></li>
            <li><a className="twitter" href="http://twitter.com/"><i className="fa fa-fw fa-2x fa-inverse fa-twitter"></i></a></li>
            <li><a className="instagram" href="https://www.instagram.com/"><i className="fa fa-fw fa-2x fa-inverse fa-instagram"></i></a></li>
          </ul>
          <a className="a" href="#" id="footer">
          </a>
          <h3 className="copyright"> &copy;2020 || Adrian D. Diaz</h3>
        </footer>
            </React.Fragment>
        )
    }
}

export default Inventory;