import React, { Component } from 'react';
import './GuideFormPage.css';

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

export default GuideFormPage;
