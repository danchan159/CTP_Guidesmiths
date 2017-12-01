import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import './GuideFormPage.css';

const FieldInputGroup = ({ id, label, help, value, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl value={value} {...props}></FormControl>
      <FormControl.Feedback/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class GuideFormPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      guideTitle: "",
      guideSubtitle: "",
      guideSummary: "",
      guideSteps: [],
      guideGifs: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateSteps = this.generateSteps.bind(this);
  };

  render() {
    return(
      <form action="POST" onSubmit={this.handleSubmit}>
        <FieldInputGroup
          id="guideTitle"
          label="Guide Title:"
          help="*Pick a good title for your guide.*"
          type="text" value={this.state.guideTitle} placeholder="My Guide Title" onChange={this.handleChange}
        />
        <br/>
        <FieldInputGroup
          id="guideSubtitle"
          label="Guide Subtitle:"
          help="*This lets you expand on your title just a bit.*"
          type="text" value={this.state.guideSubtitle} placeholder="My Guide Subtitle" onChange={this.handleChange}
        />
        <br/>
        {this.generateSteps(5)}
        <FieldInputGroup
          id="guideSummary"
          label="Guide Summary:"
          help="*Wrap up your guide with a short summary.*"
          type="text" componentClass="textarea" value={this.state.guideSummary} placeholder="My Guide Summary" onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }

  handleSubmit(event) {
    fetch('/api/guide-form/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: this.props.user.userID,
        title: this.state.guideTitle,
        subtitle: this.state.guideSubtitle,
        summary: this.state.guideSummary,
        Step1: this.state.guideSteps[0],
        Step1Title: "Step1",
        Step2: this.state.guideSteps[1],
        Step2Title: "Step2",
        Step3: this.state.guideSteps[2],
        Step3Title: "Step3",
        Step4: this.state.guideSteps[3],
        Step4Title: "Step4",
        Step5: this.state.guideSteps[4],
        Step5Title: "Step5",
        CatName: "this.state.Categories"
      })
    })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }

  handleChange(event) {
    if(event.target.id === "guideTitle") {
      this.setState({
        guideTitle: event.target.value
      });
    }
    else if(event.target.id === "guideSubtitle") {
      this.setState({
        guideSubtitle: event.target.value
      });
    }
    else if(event.target.id === "guideSummary") {
      this.setState({
        guideSummary: event.target.value
      });
    }
    else if(event.target.id.startsWith("gif")) {
      let newGuideGifs = this.state.guideGifs;
      newGuideGifs[event.target.index] = event.target.value;
      this.setState({
        guideGifs: newGuideGifs
      });
    }
    else {
      let newGuideSteps = this.state.guideSteps;
      newGuideSteps[event.target.index] = event.target.value;
      this.setState({
        guideSteps: newGuideSteps
      });
    }
  }

  generateSteps(numSteps) {
    let steps = [];
    for(let stepNum = 0; stepNum < numSteps; stepNum++) {
      steps.push(
        <div>
          <FieldInputGroup
            id={`step${stepNum + 1}`}
            label={`Step ${stepNum + 1}:`}
            help={`*Fill in info for step ${stepNum + 1}.*`}
            index={stepNum} type="text" componentClass="textarea" value={this.state.guideSteps[stepNum]} 
            placeholder={`My Step Text`} onChange={this.handleChange} key={stepNum}
          />
          <br/>
          <FieldInputGroup
            id={`gif${stepNum + 1}`}
            label={`Gif ${stepNum + 1}:`}
            help={`*Upload your gif for step ${stepNum + 1}.*`}
            index={stepNum} type="file" value={this.state.guideGifs[stepNum]} 
            placeholder={`My Step Text`} onChange={this.handleChange} key={stepNum + numSteps}
          />
        </div>
      );
    }
    return steps;
  }

}

export default GuideFormPage;
