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
         <h3>{guide.subtitle}</h3>
         <Route path="`/guide/guide?={guide.guideID}`" component={GuideContentPage}/>
         <p>{`By ${guide.UserUserName}`}</p>
         <Image src={`http://localhost:8001/${guide.coverImageLocation}`} responsive/>
         <h4>Step1:</h4> {stepTitle[0]}
         {stepGL[0]}
         <br></br>
         {stepContent[0]}
         <br></br>
         <h4>Step2:</h4>{stepTitle[1]}
         {stepGL[1]}
         <br></br>
         {stepContent[1]}
         <br></br>
         <h4>Step3:</h4>{stepTitle[2]}
         {stepGL[2]}
         <br></br>
         {stepContent[2]}
         <br></br>
         <h4>Step4:</h4>{stepTitle[3]}
         {stepGL[3]}
         <br></br>
         {stepContent[3]}
         <br></br>
         <h4>Step5:</h4>{stepTitle[4]}
         {stepGL[4]}
         <br></br>
         {stepContent[4]}
         <br></br>
         {stepTitle[5]}
         {stepGL[5]}
         <br></br>
         {stepContent[5]}
         <h4>Summary:</h4> <p>{guide.summary}</p>
       </Panel>
   )
}

export default GuidePreview;