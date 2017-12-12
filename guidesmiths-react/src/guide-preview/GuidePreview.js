import React, { Component } from 'react';
import { Panel, Image} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import GuideContentPage from '../guide-content-page/GuideContentPage.js';


class GuidePreview extends Component {

  render(){
    return (
        <Panel onClick={() => this.props.onClick(this.props.guide.guideID)}>
          <h2>{this.props.guide.title}</h2>
          <p>{`By ${this.props.guide.UserUserName}`}</p>
          <Image src={`http://localhost:8001/${this.props.guide.coverImageLocation}`} responsive/>
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
}

export default GuidePreview;