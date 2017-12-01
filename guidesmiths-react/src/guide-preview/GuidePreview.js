import React from 'react';
import { Panel, Image} from 'react-bootstrap';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const GuidePreview = (props) => {
    const guide = props.guide


    return (
        <Panel>
          <LinkContainer to="`/guide-list/${guide.title}`"><h2>{guide.title}</h2></LinkContainer>
          <Route path="`/guide-list/${guide.title}`" component={GuideContentPage}/>
          <p>By {guide.Users.email}</p>
          <Image src={guide.cover_Image_Location}/>
            {/*<div className="steps">
              <ul>
                {
                  guide.Steps.map((step, i) => {
                    return (
                      <div key={`g${guide.id}s${step.id}`}>
                        <li name={`step${step.id}`} value={`step${step.id}`}> </li>
                      </div>
                    )
                  })
                }
              </ul>
            </div>*/}
        </Panel>
    )
}

export default GuidePreview;