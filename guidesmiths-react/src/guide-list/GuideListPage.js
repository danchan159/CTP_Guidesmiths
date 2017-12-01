import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './GuideListPage.css';
import GuideContent from '../guide-content/GuideContent.js';

class GuideListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: []
    }
    this.getAllGuides = this.getAllGuides.bind(this)
  }


  componentDidMount() {
    fetch('/api/guides')
      .then(res => res.json())
      .then(data => data.data)
      .then(guide => this.setState({guides: guide}))
      .catch(console.error)
  }

  render() {
    console.log("guides = ", this.state.guides)
    const guides = this.state.guides.map(guide => {
      return <GuidePreview
        key={`guide${guide.guide_id}`}
        guide={guide} />
    })

    return (
     <Jumbotron>
        <h1> All Guides </h1>
        <div className="container">
          <p></p>
          { guides }
        </div>
    )
  }

  {/*
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
  }*/}
}

export default GuideListPage;
