import React, { Component } from "react";
import '../App.css';
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstname: "",
        lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { firstname, lastname, email, password } = this.state;

    axios
      .post(
        "http://localhost:4000/api/users",
        {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        },
      )
      .then(response => {
        console.log('Registration Successful');
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="formheader">R E G I S T E R</div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group"><label>F I R S T N A M E</label>
            <input
              type="firstname"
              name="firstname"
              placeholder="Firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              required/>
          </div>
          <br></br>
          <div className="input-group"><label>L A S T N A M E</label>
            <input
              type="lastname"
              name="lastname"
              placeholder="Lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              required/>
          </div>
          <br></br>
          <div className="input-group"><label>E M A I L</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required/>
          </div>
          <br></br>
          <div className="input-group"><label>P A S S W O R D</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required/>
          </div>
          <br></br>
          <div className="input-group">
            <button type="submit" onClick={this.onSubmit}>Register</button>
          </div>
          <p>Already a member? <a href='/login'>Sign In</a></p>
        </form>
        <br></br><br></br>
      </div>
    );
  }
}