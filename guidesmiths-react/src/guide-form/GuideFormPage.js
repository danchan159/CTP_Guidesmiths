import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import './GuideFormPage.css';

class GuideFormPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <form>
        <FormGroup>
          <ControlLabel>*Insert Step Here*</ControlLabel>
          <FormControl type="text" value={this.state.value} placeholder="*Insert Text Here*" onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>*Insert Help Statement Here*</HelpBlock>
        </FormGroup>
      </form>
    );
  }

  handleSubmit() {

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

}

export default GuideFormPage;
