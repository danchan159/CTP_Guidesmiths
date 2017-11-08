import React, { Component } from 'react';
import './LoginPage.css';

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

export default LoginPage;
