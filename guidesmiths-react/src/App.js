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
            <LoginPage />
          </div>
        </div>
      );
    }
    else if(display === "GuideListPage") {
      return <GuideListPage onClick={event => this.handleClick(event)} />;
    }
    else if(display === "SignUpPage") {
      return <SignUpPage onSignUp={event => this.handleClick(event)} />;
    }
    else if(display === "GuideFormPage") {
      return <GuideFormPage onClick={event => this.handleClick(event)} />;
    }
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
