import React , { Component } from 'react';
import { Button, Panel, Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';



class GuidePreview extends Component{
  constructor(props){
    super(props)
    this.render = this.render.bind(this)
    this.state = {

    }

    console.log(this.props)
  }
  renderPanel() {

  } 

  render() {
      const guide = this.props.guide;
      const steps = [];
      for (let step in this.props.steps){
        if(this.props.steps[step].GuideGuideID === this.props.guide.guideID)
          steps.push(this.props.steps[step]);
      }
      let open = this.props.open;
      const index = this.props.index;

      let stepTitle = [];
      let stepContent = [];
      let stepGL = [];
      if (steps.length !== 0){
        console.log("STEPS", steps);
        for(let step in steps){
          stepTitle.push(<p>{steps[step].title}</p>)
          stepContent.push(<p>{steps[step].content}</p>)
          stepGL.push(<Image src={`http://localhost:8001/${steps[step].gifLocation}`} responsive/>)
        }
      }
      //console.log("GUIDE", guide)
      console.log("GUIDE TITLE", guide)
      console.log("OPEN = ", index, open, this.props.onClick)
       return (
          <div className = "guidePanel">
            <Panel header={guide.title} collapsible="true" expanded = {open} 
                onSelect={() => this.props.onSelect(this.props.index)} eventKey={guide.guideID}>
             <ListGroup fill>
             <ListGroupItem bsStyle="info">  
             <h2>{guide.title}</h2>
             <h3>{guide.subtitle}</h3>
             <Route path="`/guide/guide?={guide.guideID}`" component={GuideContentPage}/>
             <p>{`By ${guide.UserUserName}`}</p>
             <h4>Summary:</h4> <p>{guide.summary}</p>
             <Image src={`http://localhost:8001/${guide.coverImageLocation}`} responsive/>
            </ListGroupItem>  
            <ListGroupItem bsStyle="success">   
             <h4>Step1:</h4> {stepTitle[0]}
             {stepGL[0]}
             <br></br>
             {stepContent[0]}
             <br></br>

             </ListGroupItem>
             <ListGroupItem bsStyle="info">
             <h4>Step2:</h4>{stepTitle[1]}

             {stepGL[1]}
             <br></br>
             {stepContent[1]}
             <br></br>

             </ListGroupItem>
             <ListGroupItem bsStyle="success">
             <h4>Step3:</h4>{stepTitle[2]}


             {stepGL[2]}
             <br></br>
             {stepContent[2]}
             <br></br>

             </ListGroupItem>
             <ListGroupItem bsStyle="info">
             <h4>Step4:</h4>{stepTitle[3]}


             {stepGL[3]}
             <br></br>
             {stepContent[3]}
             <br></br>

             </ListGroupItem>
             <ListGroupItem bsStyle="success">
             <h4>Step5:</h4>{stepTitle[4]}


             {stepGL[4]}
             <br></br>
             {stepContent[4]}
             <br></br>

             </ListGroupItem>
          </ListGroup>

             

           </Panel>
           </div>
   )}


}

export default GuidePreview;