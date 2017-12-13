import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
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
      username: "",
      loggedIn: false,
      canRedirectPostLogin: true
    };
    this.userLoggedIn = this.userLoggedIn.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="FixedUI">
          <header className="App-header">
            <h1 className="App-title" >{`Welcome to GuideSmiths${(this.state.loggedIn ? ", " : "") + this.state.username}!`}</h1>
            <br/>
            <Nav justified activeKey={3} bsStyle="pills">
              <LinkContainer to="/guide-form"><NavItem eventKey={1}>Guide Form</NavItem></LinkContainer>
              <LinkContainer to="/guide-list"><NavItem eventKey={2}>Guide List</NavItem></LinkContainer>
              <LinkContainer exact to="/"><NavItem eventKey={3} ref="home">Home</NavItem></LinkContainer>
              <LinkContainer to="/sign-up"><NavItem eventKey={4}>Sign Up</NavItem></LinkContainer>
              <LinkContainer to="/login"><NavItem eventKey={5}>Login</NavItem></LinkContainer>
            </Nav>
          </header>
        </div>
      {/* Since Routes need to be passed props, namely the user information, we are using 'render' instead of 'component' 
          so we can use it in an inline call */}
        <Route path="/guide-form" render={(routeProps) => <GuideFormPage user={this.state} {...routeProps}/>}/>
        <Route path="/guide-list" render={(routeProps) => <GuideListPage user={this.state} {...routeProps}/>}/>
        <Route exact path="/" render={(routeProps) => <HomePage user={this.state} {...routeProps}/>}/>
        <Route path="/sign-up" render={(routeProps) => <SignUpPage user={this.state} {...routeProps}/>}/>
        <Route path="/login" render={(routeProps) => (
          this.state.loggedIn && this.state.canRedirectPostLogin ? (
            <div>
              {this.setState({  canRedirectPostLogin: false  })}
              <Redirect to="/guide-list"/>
            </div>
          ) : (
            <LoginPage user={this.state} updateCurUser={this.userLoggedIn} {...routeProps}/>
          )
        )}/>
      </div>
    );
  }

  userLoggedIn(username) {
    this.setState({
      username,
      loggedIn: true,
      canRedirectPostLogin: true
    })
  }
}

export default App;
