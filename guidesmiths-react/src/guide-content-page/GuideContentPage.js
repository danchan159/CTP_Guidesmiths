import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import GuideStep from '../guide-step/GuideStep.js';

class GuideContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      guide: []
    }
    this.getAllGuides = this.getAllGuides.bind(this)
  }

  componentDidMount() {
    fetch(`/api/guide/guide?id=${this.props.guide.guideID}`)
      .then(res => {if(res.ok) {
        return res.json();}
        throw new Error('Network response was not ok.');})
      .then(data => this.setState({steps: data.steps, guide: data.guide}))
      .catch(console.error)
  }

  render() {
    console.log("guide = ", this.state.guide)
    console.log("steps = ", this.state.steps)
    const guide = this.state.guide
    const steps = this.state.steps.map(step => {
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
          { steps }
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
