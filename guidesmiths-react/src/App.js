import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import SignUpPage from './sign-up/SignUpPage.js';
import LoginPage from './login/LoginPage.js';
import GuideListPage from './guide-list/GuideListPage.js';
import GuideFormPage from './guide-form/GuideFormPage.js';
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
        <div className="FixedUI">
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
        </div>
      {/* Since Routes need to be passed props, namely the user information, we are using 'render' instead of 'component' 
          so we can use it in an inline call */}
        <Route path="/guide-form" render={(routeProps) => <GuideFormPage user={this.state} {...routeProps}/>}/>
        <Route path="/guide-list" render={(routeProps) => <GuideListPage user={this.state} {...routeProps}/>}/>
        <Route exact path="/" render={(routeProps) => <HomePage user={this.state} {...routeProps}/>}/>
        <Route path="/sign-up" render={(routeProps) => <SignUpPage user={this.state} {...routeProps}/>}/>
        <Route path="/login" render={(routeProps) => <LoginPage user={this.state} {...routeProps}/>}/>
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
