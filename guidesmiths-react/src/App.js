import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import SignUpPage from './sign-up/SignUpPage.js';
import LoginPage from './login/LoginPage.js';
import GuideListPage from './guide-list/GuideListPage.js';
import GuideFormPage from './guide-form/GuideFormPage.js';
import GuideViewPage from './guide-view/GuideViewPage.js';
import HomePage from './home/HomePage.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userID: null,
      loggedIn: false
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
          <h1 className="App-title">Welcome to GuideSmiths</h1>
        </header>
        <p>
          {this.testRequest()}
        </p>
        <Nav justified activeKey={3} bsStyle="pills">
          <LinkContainer to="/guide-form"><NavItem eventKey={1}>Guide Form</NavItem></LinkContainer>
          <LinkContainer to="/guide-list"><NavItem eventKey={2}>Guide List</NavItem></LinkContainer>
          <LinkContainer exact to="/"><NavItem eventKey={3} ref="home">Home</NavItem></LinkContainer>
          <LinkContainer to="/sign-up"><NavItem eventKey={4}>Sign Up</NavItem></LinkContainer>
          <LinkContainer to="/login"><NavItem eventKey={5}>Login</NavItem></LinkContainer>
        </Nav>
        <Route path="/guide-form" component={GuideFormPage}/>
        <Route path="/guide-list" component={GuideListPage}/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/sign-up" component={SignUpPage}/>
        <Route path="/login" component={LoginPage}/>
      </div>
    );
  }

  // whatToDisplay() {
    
  //   let display = this.state.display;
  //   if(display === "LoginPage") {
  //     return(
  //       <div>
  //         <div>
  //           <LoginPage />
  //         </div>
  //       </div>
  //     );
  //   }
  //   else if(display === "GuideListPage") {
  //     return <GuideListPage onClick={event => this.handleClick(event)} />;
  //   }
  //   else if(display === "SignUpPage") {
  //     return <SignUpPage onSignUp={event => this.handleClick(event)} />;
  //   }
  //   else if(display === "GuideFormPage") {
  //     return <GuideFormPage onClick={event => this.handleClick(event)} />;
  //   }
  //   else if(display === "GuideViewPage") {
  //     return <GuideViewPage onClick={event => this.handleClick(event)} />;
  //   }
  // }

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
