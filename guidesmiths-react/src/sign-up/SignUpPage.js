import React, { Component } from 'react';
import './SignUpPage.css';

class SignUpPage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testPost = this.testPost.bind(this);
  }

  render() {
    return(
      <div className="form-group">
        <form action="POST" onSubmit={this.handleSubmit}>
          First Name:<input type="text" name="firstName" className="form-control" onChange={this.onFirstNameChange}/><br/>
          Last Name:<input type="text" name="lastName" className="form-control" onChange={this.onLastNameChange}/><br/>
          Email: <input type="email" name="email" className="form-control" onChange={this.onEmailChange}/><br/>
          Password: <input type="password" name="password" className="form-control password" onChange={this.onPasswordChange}/><br/>
          <input type="submit" value="Sign Up"></input><br/><br/>
        </form>
        <button onClick={this.testPost}>Test POST to sign-up</button>
      </div>
    );
  }

  onFirstNameChange(event) {
    console.log(event.target.value);
    this.setState({firstName: event.target.value});
  }

  onLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log(event.target);
    fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(res => {
    	console.log(res);
    	return res.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }

  testPost(event) {
    console.log(event.target.value);
    fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: "this.state.firstName",
        lastName: "this.state.lastName",
        email: "anEmail@email.com",
        password: "this.state.password"
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }
}

export default SignUpPage;
