import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './sign-up/SignUpPage.js';
import LoginPage from './login/LoginPage.js';
import GuideListPage from './guide-list/GuideListPage.js';
import GuideFormPage from './guide-form/GuideFormPage.js';

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
