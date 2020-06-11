import React from "react"
import {Link} from "react-router-dom";


const Footer = () => {

    return (
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
    );
  }


export default Footer;