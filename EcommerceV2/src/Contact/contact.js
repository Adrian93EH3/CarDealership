import React from "react";
import SlideShow from "../Slider/slider2";

const Contact = () => {
return (
      <div>
        <SlideShow />
        <div className="showcase container">
          <h2 className="text-primary">Contact Us</h2>
          <form class="container">

            <div class="form-group">
              <label for="name">Name: </label>
              <input placeholder="'First Name' 'Last Name'" type="text" id="name" name="name" required />
            </div>

            <div class="form-group">
              <label for="email">Email: </label>
              <input placeholder="youremailhere@email.com" type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
              <label for="message">Message: </label>
              <textarea placeholder="Did one of our vehicles catch your eye? Please leave us your email, a phone number to contact you and the vehicle make and model that you are interested in! Our team is ready to respond within 12 hours and set up a meeting with you swiftly! Please feel free to also provide us with any feedback you may have!" id="message" name="message"></textarea>
            </div>
            <button type="submit" class="btn"> Submit </button>
          </form>
        </div>
      </div>

    );
  }

export default Contact;