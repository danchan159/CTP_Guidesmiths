import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return(
      <div>
        <h2>Login with your email and password</h2>
        <form action="POST" onSubmit={this.handleSubmit} className="form">
          <FormGroup controlId="emailField">
            <ControlLabel>Email:</ControlLabel>
            <FormControl type="text" placeholder="*Your Email*" onChange={this.handleChange}></FormControl>
            <FormControl.Feedback/>
          </FormGroup>
          <FormGroup controlId="passwordField">
            <ControlLabel>Password:</ControlLabel>
            <FormControl type="password" placeholder="*Your Password*" onChange={this.handleChange}></FormControl>
            <FormControl.Feedback/>
          </FormGroup>
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }

  handleSubmit() {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }

  handleChange(event) {
    console.log(event.target.value)
    if(event.target.id = "emailField") {
      this.setState({
        email: event.target.value,
        password: this.state.password
      });
    }
    else {  // event.target.id = "passwordField"
      this.setState({
        email: this.state.email,
        password: event.target.value
      });
    }
  }

}

export default LoginPage;
