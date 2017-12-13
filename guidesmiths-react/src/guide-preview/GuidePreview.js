import React, { Component } from 'react';
import { Panel, Image} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';


const GuidePreview = (props) => {
  const guide = props.guide;
  const steps = [];
  for (let step in props.steps){
    if(props.steps[step].GuideGuideID == props.guide.guideID)
      steps.push(props.steps[step]);
  }

  let stepTitle = [];
  let stepContent = [];
  let stepGL = [];
  if (steps.length != 0){
    console.log("STEPS", steps);
    for(let step in steps){
      stepTitle.push(<p>{steps[step].title}</p>)
      stepContent.push(<p>{steps[step].content}</p>)
      stepGL.push(<Image src={`http://localhost:8001/${steps[step].gifLocation}`} responsive/>)
    }
  }
  //console.log("GUIDE", guide)
  console.log("GUIDE TITLE", guide)
   return (
       <Panel>
         <LinkContainer to={`/guide/${guide.guideID}`}><h2>{guide.title}</h2></LinkContainer>
         <Route path="`/guide/guide?={guide.guideID}`" component={GuideContentPage}/>
         <p>{`By ${guide.UserUserName}`}</p>
         <Image src={`http://localhost:8001/${guide.coverImageLocation}`} responsive/>
         {stepTitle[0]}
         {stepContent[0]}
         {stepGL[0]}
         <br></br>
         {stepTitle[1]}
         {stepContent[1]}
         {stepGL[1]}
         <br></br>
         {stepTitle[2]}
         {stepContent[2]}
         {stepGL[2]}
         <br></br>
         {stepTitle[3]}
         {stepContent[3]}
         {stepGL[3]}
         <br></br>
         {stepTitle[4]}
         {stepContent[4]}
         {stepGL[4]}
         <br></br>
         {stepTitle[5]}
         {stepContent[5]}
         {stepGL[5]}
       </Panel>
   )
}

export default GuidePreview;