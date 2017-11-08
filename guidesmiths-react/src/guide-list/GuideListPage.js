import React, { Component } from 'react';
import './GuideListPage.css';

class GuideListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: []
    }
    this.getAllGuides = this.getAllGuides.bind(this)
  }

  getAllGuides() {
    fetch('/api/guide')
      .then(res => res.json())
      .then(data => data.data)
      .then(guide => this.setState({guides: guide}))
      .catch(console.error)
  }

  render() {
    console.log("guides = ", this.state.guides)
    const guides = this.state.guides.map(guide => {
      return <GuideContent
        key={`guide${guide.guide_id}`}
        guide={guide} />
    })

    return (
      <div className="container">
        { guides }
      </div>
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

export default GuideListPage;
