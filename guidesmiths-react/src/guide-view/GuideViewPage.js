import React, { Component } from 'react';
import './GuideViewPage.css'

class GuideViewPage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
	  return (
		
		<div className="panel panel-body">
		<label>Guide</label>
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
		);
	}
}	

export default GuideViewPage;