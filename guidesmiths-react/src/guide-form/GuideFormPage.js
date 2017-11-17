import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import './GuideFormPage.css';

class GuideFormPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      guideTitle: "",
      stepInfo: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateSteps = this.generateSteps.bind(this);
  };

  render() {
    return(
      <form>
        <FormGroup key={0}>
          <ControlLabel>Guide Title:</ControlLabel>
          <FormControl type="text" value={this.state.guideTitle} placeholder="My Guide Title" onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>*Insert a short title for your guide.*</HelpBlock>
        </FormGroup>
        {this.generateSteps(5)}
      </form>
    );
  }

  handleSubmit() {

  }

  handleChange(event) {
    console.log(event.target);
    if(event.target.placeholder === "My Guide Title") {
      this.setState({
        guideTitle: event.target.value
      });
    }
    else {
      let newStepInfo = this.state.stepInfo;
      newStepInfo[event.target.index] = event.target.value;
      this.setState({
        stepInfo: newStepInfo
      });
      console.log(event.target.value);
    }
  }

  generateSteps(numSteps) {
    let steps = [];
    for(let stepNum = 0; stepNum < numSteps; stepNum++) {
      steps.push(
        <FormGroup key={stepNum + 1}>
          <ControlLabel value={`Step ${stepNum}:`}></ControlLabel>
          <FormControl index={stepNum} type="text" value={this.state.stepInfo[stepNum]} placeholder={`My Step Text`} onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock value={`*Fill in info for step ${stepNum}.*`}></HelpBlock>
        </FormGroup>
      );
    }
    return steps;
  }

}

export default GuideFormPage;
