import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './GuideListPage.css';
import GuidePreview from '../guide-preview/GuidePreview.js';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';

class GuideListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      steps: [],
      guide: null,
      hasBeenClicked: false
    }

  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(guideID) {
    console.log(guideID);
    this.setState({hasBeenClicked: !this.state.hasBeenClicked});
    fetch(`/api/guide?id=${guideID}`)
     .then(res => {if(res.ok) {
        return res.json();}
        throw new Error('Network response was not ok.');})
      .then(data => this.setState({steps: data.steps, guide: data.guide}))
            //data => console.log("data = ", data))
      .then(console.log(this.state.hasBeenClicked, this.state.steps, this.state.guide))
      .catch(console.error)
  }

  // maybe a solution, a lifecycle method of Component, to reset the render state on Preview click?
  componentWillReceiveProps(){}


  componentDidMount() {
    let temp = [];
    fetch('/api/guides')
      .then(res => {if(res.ok) {
        return res.json();}
        throw new Error('Network response was not ok.');})
      .then(data => {
        this.setState({guides: data});
        this.state.guides.forEach((guide)=> {
          fetch(`/api/guide-steps/?id=${guide.guideID}`)
            .then(res => res.json())
            .then(data => {
              temp = this.state.steps;
              temp.push(data);
              this.setState({steps: temp})
            })
          })
      })
      .catch(console.error)
  }

  render() {
    //console.log("render guides = ", this.state.guides)
    //console.log("render steps = ", this.state.steps)
    const guides = this.state.guides.map(guide => {
      return <GuidePreview
        key={`guide${guide.guideID}`}
        guide={guide} 
        onClick={guideID => this.handleClick(guideID)}
        //hasBeenClicked = {this.state.hasBeenClicked}
        />
    })

    const steps = this.state.steps.map(steps => {
      //console.log("HELLO", steps);
      return <GuidePreview
        key={`steps${steps.postID}`}
        steps={steps} 
        //onClick={guideID => this.handleClick(guideID)}
        //hasBeenClicked = {this.state.hasBeenClicked}
        />
    })

    if(this.hasBeenClicked) {
      return (
        <Jumbotron>
          <h1> Requested Guide </h1>
          <div className="container">
           <GuideContentPage 
              key={`guide${this.state.guide.guideID}`}
              guide= {this.state.guide}
              steps= {this.state.steps}
            />
          </div>
        </Jumbotron>
      )
    } else {
      return (
       <Jumbotron>
          <h1> All Guides </h1>
          <div className="container">
            <p></p>
            { guides }
          </div>
      </Jumbotron>
      )
    } 
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
