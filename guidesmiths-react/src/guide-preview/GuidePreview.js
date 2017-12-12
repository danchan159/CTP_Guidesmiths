import React from 'react';
import { Panel, Image} from 'react-bootstrap';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const GuidePreview = (props) => {
    const guide = props.guide


    return (
        <Panel>
          <LinkContainer to={`/guide/${guide.guideID}`}><h2>{guide.title}</h2></LinkContainer>
          <Route path="`/guide/guide?={guide.guideID}`" component={GuideContentPage}/>
          <p>{`By ${guide.UserUserName}`}</p>
          <Image src={`http://localhost:8001/${guide.coverImageLocation}`} responsive/>
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