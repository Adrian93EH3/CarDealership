import React from "react";
import SlideShow from "../Slider/slider2";
const defaultState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
};

class Form extends React.Component {
  state = defaultState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "Please fill out your name.";
    }

    if (!this.state.email.includes("@")) {
      emailError = "This email is not valid.";
    }

    if (nameError || emailError) {
      this.setState({ nameError, emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //Clearing form
    this.setState(defaultState);
    }
  };
  render() {
    return (
      <React.Fragment>
      <div>
        <header className="header">
                    <img className="logo" src="Cars/logo.jpeg" alt="logo" /><a href=""></a>
                    <ul className="nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="inventory.html">Inventory</a></li>
                        <li><a className="current" href="#">Contact</a></li>
                    </ul>
                </header>
                <SlideShow/>
                <img className="hidden" src="Cars/index.jpg" alt="hidden" />
                <div className="showcase container">
            <h2 className="text-primary">Contact Us</h2>
            <form onSubmit={this.handleSubmit} class="container">

<div class="form-group">
    <label for="name">Name: </label>
    <input placeholder="'First Name' 'Last Name'" type="text" id="name" name="name" value={this.state.name}
    onChange={this.handleChange} required/>
    <div className="validate">{this.state.nameError}</div>
</div>

<div class="form-group">
    <label for="email">Email: </label>
    <input placeholder="youremailhere@email.com" type="text" id="email" name="email" value={this.state.email}
    onChange={this.handleChange} required/>
    <div className="validate">{this.state.emailError}</div>
</div>

<div class="form-group">
    <label for="message">Message: </label>
    <textarea placeholder="Did one of our vehicles catch your eye? Please leave us your email, a phone number to contact you and the vehicle make and model that you are interested in! Our team is ready to respond within 12 hours and set up a meeting with you swiftly! Please feel free to also provide us with any feedback you may have!" id="message" name="message"></textarea>
</div>
<button type="submit" class="btn"> Submit </button>
</form>
          </div>
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
    );
  }
}

export default Form;