import React, { Component } from "react";
import '../App.css';
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
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
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:4000/api/auth/",
        {
            "email": email,
            "password": password
        }
      )
      .then(response => {
        console.log('Login Successful');
          if(response.data.logged_in) {
            this.props.handleSuccessfulAuth(response.data);
          }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="formheader">L O G - I N</div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group"><label>E M A I L </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required/>
          </div>
          <br></br>
          <div className="input-group">
            <label>P A S S W O R D</label>
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
            <button type="submit" onClick={this.onSubmit} href='/app'>Login</button>
          </div>
          <p>Not yet a member? <a href='/register'>Sign up</a></p>
        </form>
      </div>
    );
  }
}