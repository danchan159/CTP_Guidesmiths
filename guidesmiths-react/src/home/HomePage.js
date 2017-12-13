import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Image, Panel, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import './HomePage.css';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render(){

		return (
			<Jumbotron>
			<h1> Learn, Laugh, Leave Happy!</h1>
			<Image src="https://cdn.pixabay.com/photo/2017/02/17/11/21/chill-out-2073882_960_720.jpg" circle  />
			<h2>Mission</h2>
				<h3>Giving Busy People The Opportunity To Learn Things Quick!</h3>
			<Grid>
    			<Row className="show-grid">
		    		<Col xs={12} md={4}>
		    			<h2>What Are We?</h2>
		    			<h3>Guidesmiths is a expanding platform for agile and simple tutorials, developed for the modern enthusiast.</h3>
		    		</Col>
		     	 	<Col xs={12} md={4}>
		     	 		<h2>Who Are You?</h2>
		     	 		<ul style="list-style:none;" >
		      			<li> A Handy(wo)man </li>
		      			<li> Tech-savvy Individual </li>
		      			<li> Young/Old Scholar </li>
		      			</ul>
		     	 	</Col>
		      		<Col xs={12} md={4}>
		      			<h2>Our Competitors</h2>
		      			<ul style="list-style:none;" >
		      			<li font >WikiHow - ignores the content creators </li>
		      			<li>Youtube - watching how-to videos in 2017</li>
		      			</ul>
		      		</Col>
    			</Row>
    		</Grid>
			</Jumbotron>
			)

	}
}

export default HomePage;