import React, { Component } from 'react';
import './SignUpPage.css';

class SignUpPage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
    }

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div className="form-group">
        <form action="POST" onSubmit={this.handleSubmit}>
          First Name:<input type="text" name="firstName" className="form-control" onChange={this.onFirstNameChange}/><br/>
          Last Name:<input type="text" name="lastName" className="form-control" onChange={this.onLastNameChange}/><br/>
          Email: <input type="email" name="email" className="form-control" onChange={this.onEmailChange}/><br/>
          Username: <input type="userName" name="userName" className="form-control" onChange={this.onUserNameChange}/><br/>
          Password: <input type="password" name="password" className="form-control password" onChange={this.onPasswordChange}/><br/>
          <input type="submit" value="Sign Up"></input><br/><br/>
        </form>
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

  onUserNameChange(event) {
    this.setState({userName: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
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
        userName: this.state.userName,
        password: this.state.password
      })
    })
    .then(res => {
    	console.log(res);
    	return res.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));

    // let url = window.location.href;
    // for(let i = 0; i < url.length; ++i) {
    //   if(url.charAt(i) === '?') {
    //     window.location.href = window.location.href.slice(0, i);
    //     i = url.length;
    //   }
    // }
  }

}

export default SignUpPage;
