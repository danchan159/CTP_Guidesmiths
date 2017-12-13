import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './GuideListPage.css';
import GuidePreview from '../guide-preview/GuidePreview.js';
//import GuideContentPage from '../guide-content-page/GuideContentPage.js';

class GuideListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
      steps: [],
      guide: null,
     // hasBeenClicked: false
     // open: true,
     open: []
    }

  this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(index) {
    let tempOpen = this.state.open
    tempOpen[index] = !tempOpen[index]
    this.setState({open: tempOpen});
    console.log("the open state = ", this.state);
   /* fetch(`/api/guide?id=${guideID}`)
     .then(res => {if(res.ok) {
        return res.json();}
        throw new Error('Network response was not ok.');})
      .then(data => this.setState({steps: data.steps, guide: data.guide}))
            //data => console.log("data = ", data))
      .then(console.log(this.state.hasBeenClicked, this.state.steps, this.state.guide))
      .catch(console.error)*/
  }


  componentDidMount() {
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
              let tempOpenData = this.state.open
              tempOpenData.push(false)
              this.setState({steps: this.state.steps.concat(data),
                    open: tempOpenData
            })
          })
      })
      })
      .catch(console.error)
  }


  render() {
    //console.log("render guides = ", this.state.guides)
    //console.log("render steps = ", this.state.steps[0])
    const guides = this.state.guides.map((guide, index) => {
      return <GuidePreview
        key={`guide${guide.guideID}`}
        guide={guide} 
        steps={this.state.steps}
        onSelect={this.handleSelect}
        //hasBeenClicked = {this.state.hasBeenClicked}
        open = {this.state.open[index]}
        index = {index}
        />
    })
// this if/else didn't work out, next possible solution to try out is use 
// this.props.query.location to find out the url, and extract the guideID from the url 
// as a string, and pass it to a fetch function /api/guide?=guideID

   /* if(this.hasBeenClicked) {
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
    } else {*/
      return (
       <Jumbotron>
          <h2> The Guides! Submit Your Own! </h2>
          <div className="container">
            <p></p>
            { guides }
          </div>
      </Jumbotron>
      )
  } 
}


export default GuideListPage;
