import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import GuideStep from '../guide-step/GuideStep.js';

class GuideContentPage extends Component {

  render() {
    console.log("GuideContentPage guide = ", this.props.guide)
    console.log("GuideContentPage steps = ", this.props.steps)
    const guide = this.props.guide
    const stepsOfGuide = this.props.steps.map(step => {
      return <GuideStep
        key={`guide${guide.guide_id}`}
        step= {step} />
    })

    return (
      <Jumbotron>
        <h1> Your Requested Guide </h1>
        <div className="guide">
          {guide.title}
        </div>
        <div className="steps">
          { stepsOfGuide }
        </div>
      </Jumbotron>
      
    )
  }

  /*
  render() {
    return(
      <div className="panel panel-body">
        <label>List of Guides</label><br/><br/>
        <label>Guide 1</label>
          <div className="panel panel-body">
            <ul>
              <li>
                <label>Step 1</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step 2</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step n</label>
                <p>Put instructions and GIF here</p>
              </li>
            </ul>
          </div>
        <label>Guide 2</label>
          <div className="panel panel-body">
            <ul>
              <li>
                <label>Step 1</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step 2</label>
                <p>Put instructions and GIF here</p>
              </li>
              <li>
                <label>Step n</label>
                <p>Put instructions and GIF here</p>
              </li>
            </ul>
          </div>
      </div>
    );
  }*/
}

export default GuideContentPage;
