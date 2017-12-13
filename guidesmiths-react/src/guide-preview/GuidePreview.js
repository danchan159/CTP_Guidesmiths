import React, { Component } from 'react';
import { Panel, Image} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';


const GuidePreview = (props) => {
  console.log(props);
   const guide = props.guide;
   const steps = props.steps;

   return (
       <Panel>
         <LinkContainer to={`/guide/${guide.guideID}`}><h2>{guide.title}</h2></LinkContainer>
         <Route path="`/guide/guide?={guide.guideID}`" component={GuideContentPage}/>
         <p>{`By ${guide.UserUserName}`}</p>
         <Image src={`http://localhost:8001/${guide.coverImageLocation}`} responsive/>

       </Panel>
   )
}

export default GuidePreview;