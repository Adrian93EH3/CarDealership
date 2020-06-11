import React from "react"
import {Link} from "react-router-dom"
import SlideShow from '../Slider/slider';


const Home = () => {

    return (
        <div>
        <SlideShow/>	
        <h1 className="featureItems">Featured Vehicles</h1>
        <div className="feature">
          <article className="child">
            <img className="child--image" src="Cars/evo.jpg" alt="picture_of_1993_evolution_II"/>
            <h4> 1993 Mitsubishi Evolution II </h4>
            <p> This bright yellow Evo II comes bone stock. With a whopping 266whp and a tremendous AWD system, this car is rowdy. Exterior and Interior 10/10 with 35K verified miles.</p>
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
        </div>
    );
  }


export default Home;