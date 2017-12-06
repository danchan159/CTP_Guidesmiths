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
      guideSteps: [{step: 1}, {step: 2}, {step: 3}, {step: 4}, {step: 5}],
      guideCategories: [],
      uploadedGifIndex: -1
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
    let data = new FormData();
    // this.state.guideSteps.foreach(step => {
    //   data.append('user')
    // });
    data.append('files', this.state.guideSteps.map(step => step.gif))
    data.append('userID', this.props.user.userID)
    data.append('title', this.state.guideTitle)
    data.append('subtitle', this.state.guideSubtitle)
    data.append('summary', this.state.guideSummary)
    data.append('Step1', this.state.guideSteps[0].content)
    data.append('Step1Title', this.state.guideSteps[0].title)
    data.append('Step2', this.state.guideSteps[1].content)
    data.append('Step3', this.state.guideSteps[2].content)
    data.append('Step3Title', this.state.guideSteps[2].title)
    data.append('Step4', this.state.guideSteps[3].content)
    data.append('Step4Title', this.state.guideSteps[3].title)
    data.append('Step5', this.state.guideSteps[4].content)
    data.append('Step5Title', this.state.guideSteps[4].title)
    data.append('CatName', "this.state.Categories")
    
    fetch('/api/guide-form/post', {
      method: 'POST',
      body: data
    })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));

    // fetch('/api/guide-form/post', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     userID: this.props.user.userID,
    //     title: this.state.guideTitle,
    //     subtitle: this.state.guideSubtitle,
    //     summary: this.state.guideSummary,
    //     Step1: this.state.guideSteps[0].content,
    //     Step1Title: this.state.guideSteps[0].title,
    //     Step2: this.state.guideSteps[1].content,
    //     Step2Title: this.state.guideSteps[1].title,
    //     Step3: this.state.guideSteps[2].content,
    //     Step3Title: this.state.guideSteps[2].title,
    //     Step4: this.state.guideSteps[3].content,
    //     Step4Title: this.state.guideSteps[3].title,
    //     Step5: this.state.guideSteps[4].content,
    //     Step5Title: this.state.guideSteps[4].title,
    //     CatName: "this.state.Categories",
    //     files: this.state.guideSteps.map(step => step.gif)
    //   }),
    // })
    // .then(res => {
    //   console.log(res);
    //   return res.json();
    // })
    // .then(json => console.log(json))
    // .catch(err => console.log(err));
  }

  handleChange(event) {
    event.preventDefault();
    if(event.target.id === "guideTitle") {
      this.setState({
        guideTitle: event.target.value
      });
      console.log(this.state.guideSteps.map(step => step.gif));
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
    else if(event.target.id.endsWith("Gif")) {
      
      let reader = new FileReader();
      let file = event.target.files[0];
      
      this.setState({
        uploadedGifIndex: event.target.getAttribute("index")
      });
      
      reader.onloadend = () => {
        let newGifGuideSteps = this.state.guideSteps;
        let guideIndex = this.state.uploadedGifIndex;
        newGifGuideSteps[guideIndex].gif = {
          file: file
        }
        this.setState({
          guideSteps: newGifGuideSteps,
        });
        console.log(this.state);
        //console.log(reader.result);
      }

      reader.readAsDataURL(file);
      // let myPromise = new Promise((resolve, reject) => {
      // let counter = 0;
      //   setInterval(() => {
      //     if(reader.readyState === 2){
      //       resolve(this.state.uploadedGifTempHolder);
      //     }
      //     counter++;
      //     if(counter )
      //   }, 100);
      // });
      // myPromise.then(message => console.log(message));
      

      // newGifGuideSteps[this.state.uploadedGifIndex].gif = reader.onloadend;
      // this.setState({
      //   guideSteps: newGifGuideSteps
      // });
      //console.log(reader.result);
    }
    else if(event.target.id.endsWith("Content")) {
      let newContentGuideSteps = this.state.guideSteps;
      newContentGuideSteps[event.target.getAttribute("index")].content = event.target.value;
      this.setState({
        guideSteps: newContentGuideSteps
      });
    }
    else { // endsWith("Title")
      let newTitleGuideSteps = this.state.guideSteps;
      newTitleGuideSteps[event.target.getAttribute("index")].title = event.target.value;
      this.setState({
        guideSteps: newTitleGuideSteps
      });
    }
  }

  generateSteps(numSteps) {
    let steps = [];
    let keyCounter = 0;
    for(let stepNum = 0; stepNum < numSteps; stepNum++) {
      steps.push(
        <div>
          <FieldInputGroup
            id={`step${stepNum + 1}Title`}
            label={`Step ${stepNum + 1}: Title`}
            help={`*Choose a title for ${stepNum + 1}.*`}
            index={stepNum} type="text" maxLength="60" 
            placeholder={`My Step Text`} onChange={this.handleChange} key={keyCounter++}
          />
          <br/>
          <FieldInputGroup
            id={`step${stepNum + 1}Gif`}
            label={`Gif ${stepNum + 1}:`}
            help={`*Upload your gif for step ${stepNum + 1}.*`}
            index={stepNum} type="file"
            placeholder={`My Step Text`} onChange={this.handleChange} key={keyCounter++}
          />
          <br/>
          <FieldInputGroup
            id={`step${stepNum + 1}Content`}
            label={`Step ${stepNum + 1}: Content`}
            help={`*Fill in the content for step ${stepNum + 1}.*`}
            index={stepNum} type="text" componentClass="textarea" maxLength="200"
            placeholder={`My Step Text`} onChange={this.handleChange} key={keyCounter++}
          />
          <br/>
        </div>
      );
    }
    return steps;
  }

}

export default GuideFormPage;
