import React from 'react';

const GuideContent = (props) => {
    const guide = props.guide

    return (
        <div className="card w3-card-4 w3-dark-grey col-lg-6 col-md-12 col-sm-12 col-xs-12 w3-animate-bottom" >
          <div className="w3-container w3-center">
            <h2>{guide.guide_ID}</h2>
            <p>By {guide.User.email}</p>
              <div className="steps">
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
              </div>
          </div>
        </div>
    )
}

export default GuideContent;