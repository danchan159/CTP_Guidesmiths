import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayThis: true
    }
  }

  render() {
    return(
      <div className="form-group">
        <form action="" onSubmit={this.handleLogin()}>
          Username: <input type="email" name="email" className="form-control"/><br/>
          Password: <input type="password" name="password" className="form-control password"/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  handleLogin() {
    
  }
}

class GuideList extends Component {
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

class GuideForm extends Component {
  constructor(props){
    super(props);

    this.state = {

    }

    
  }

  render() {
    return(
      <div className="form-group">
        <form action="" onSubmit={this.handleSubmit()}>
          First Name:<input type="text" name="firstName" className="form-control"/><br/>
          Last Name:<input type="text" name="lastName" className="form-control"/><br/>
          Email: <input type="email" name="email" className="form-control"/><br/>
          Password: <input type="password" name="password" className="form-control password"/><br/>
          <button type="submit">Sign Up</button>
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
      display: "GuideList"
    }
  }

  testRequest(){
    

    fetch('/')
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
          {this.whatToDisplay()}
          
        </div>
      </div>
    );
  }

  whatToDisplay() {
    return this.state.display == "LoginPage" ? <LoginPage display = {this.state.display}/> : this.state.display == "GuideList" ? <GuideList/> : "";
  }

  GuideForm(){
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
    //let newTest = this.state.test + '1';
    // this.setState({
    //   test: newTest
    // });

  }
}

export default App;
