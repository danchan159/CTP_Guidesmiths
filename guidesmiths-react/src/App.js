import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function GuideForm(props){
    return(
      <div className="form-group">
        <form action="/sign-up" method="post">
          Username:<input type="text" name="firstName" className="form-control"/><br/>
          First Name:<input type="text" name="lastName" className="form-control"/><br/>
          Last Name:<input type="text" name="lastName" className="form-control"/><br/>
          Email: <input type="text" name="email" className="form-control"/><br/>
          Password: <input type="text" name="password" className="form-control"/><br/>
          <button type="submit">Sign-up</button>
        </form>
      </div>
      );
  }



class App extends Component {

  testRequest(){
    

    fetch('http://localhost:3001/test')
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
          <GuideForm></GuideForm>
          <button onClick={this.handleClick()}>Test</button>
        </div>
      </div>
    );
  }

  handleClick(evt){
    console.log(evt);
    //let newTest = this.state.test + '1';
    // this.setState({
    //   test: newTest
    // });
  }
}

export default App;
