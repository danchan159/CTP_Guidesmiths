import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import GuideContent from '../guide-content/GuideContent.js';

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
    fetch('/api/guide/guide?id={this.props.guide_id}')
      .then(res => res.json())
      .then(data => data.data)
      .then(guide => this.setState({guides: guide}))
      .catch(console.error)
  }

  render() {
    console.log("guides = ", this.state.guides)
    const guide = this.state.guide.map(guide => {
      return <GuideContent
        key={`guide${guide.guide_id}`}
        guide={guide} />
    })

    return (
      <Jumbotron>
        <h1> Your Requested Guide </h1>
        <div className="container">
          { guide }
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
