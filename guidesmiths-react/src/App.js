import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loggedIn: false
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
          Create Your Guide:
        </p>
        <p>
          {this.testRequest()}
        </p>
        <div>
          {this.GuideForm()}
          <button onClick={this.handleClick()}>Test</button>
        </div>
      </div>
    );
  }

  GuideForm(){
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

  handleSubmit(event){
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ loggedIn: true });
        }
        else {
          _this.setState({ loggedIn: false });
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
  }

  handleClick(evt){
    //let newTest = this.state.test + '1';
    // this.setState({
    //   test: newTest
    // });
  }
}

export default App;
