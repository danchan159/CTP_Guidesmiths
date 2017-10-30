import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleMyClick = this.handleMyClick.bind(this);
  }

  render() {
    return(
      <div className="form-group">
        Username: <input type="username" name="username" className="form-control"/><br/>
        Password: <input type="password" name="password" className="form-control password"/><br/>
        <button onClick={this.handleMyClick}>Login</button>
      </div>
    );
  }

  handleMyClick() {
    console.log(this.props);
  }

}

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
    .then(res => res.json())
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

class GuideListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div className="panel panel-body">
        <label>List of Guides</label><br/><br/>
        <label>Guide 1</label>
          <div className="panel panel-body">
            <ul>
              <li>
                <label>Step 1</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step 2</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step n</label>
                <p>Put instructions and GIF here</p>
              </li>
            </ul>
          </div>
        <label>Guide 2</label>
          <div className="panel panel-body">
            <ul>
              <li>
                <label>Step 1</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step 2</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step n</label>
                <p>Put instructions and GIF here</p>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

class GuideFormPage extends Component {
  constructor(props){
    super(props);

    this.state = {

    }

    
  }

  render() {
    return(
      <div className="form-group">
        <form action="POST" onSubmit={this.handleSubmit}>
          First Name:<input type="text" name="firstName" className="form-control"/><br/>
          Last Name:<input type="text" name="lastName" className="form-control"/><br/>
          Email: <input type="email" name="email" className="form-control"/><br/>
          Password: <input type="password" name="password" className="form-control password"/><br/>
          <input type="submit" value="Submit">Sign Up</input>
        </form>
      </div>
    );
  }

  handleSubmit() {

  }

}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      display: "SignUpPage"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  testRequest(){
    

    fetch('/api')
    .then(res => {
      console.log(res);
      return res.json();
    }) 
    .then(json => {
      console.log(json);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GuideSmiths</h1>
        </header>
        <p className="App-intro">
        </p>
        <p>
          {this.testRequest()}
        </p>
        <div>
          <button onClick={this.handleClick}>Login</button>
          {this.whatToDisplay()}
          
        </div>
      </div>
    );
  }

  whatToDisplay() {
    
    let display = this.state.display;
    if(display === "LoginPage") {
      return(
        <div>
          <div>
            <LoginPage test="test" tester={"tester"} key={1}/>
          </div>
        </div>
      );
    }
    else if(display === "GuideListPage") {
      return <GuideListPage onClick={event => this.handleClick(event)}/>;
    }
    else if(display === "SignUpPage") {
      return <SignUpPage />;
    }
    else if(display === "GuideFormPage") {
      return <GuideFormPage onClick={event => this.handleClick(event)}/>;
    }
  }

  GuideFormPage(){
    return(
      <div className="form-group">
        <form action="" onSubmit={this.handleSubmit()}>
          First Name:<input type="text" name="firstName" className="form-control"/><br/>
          Last Name:<input type="text" name="lastName" className="form-control"/><br/>
          Email: <input type="email" name="email" className="form-control"/><br/>
          Password: <input type="password" name="password" className="form-control password"/><br/>
          <button type="submit">Sign Up</button><br/><br/>
          <button onClick={(event) => this.handleClick(event)}>I have an account</button>
        </form>
      </div>
    );
  }

  handleSubmit(){
    // var xmlhttp = new XMLHttpRequest();
    // var _this = this;
    // xmlhttp.onreadystatechange = () => {
    //   if (xmlhttp.readyState === 4) {
    //     var response = JSON.parse(xmlhttp.responseText);
    //     if (xmlhttp.status === 200 && response.status === 'OK') {
    //       _this.setState({ loggedIn: true });
    //     }
    //     else {
    //       _this.setState({ loggedIn: false });
    //     }
    //   }
    // };
    // xmlhttp.open('POST', 'send', true);

  }

  handleClick(event){
    console.log(event);
    this.setState({
      display: "GuideListPage"
    });
  }

  // handleClick(){
  //   console.log("I was clicked!");
  // }
}

export default App;
