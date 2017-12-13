import React, { Component } from 'react';
import { Jumbotron, Image, Panel, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
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
		
			</Jumbotron>
			)

	}
}

export default HomePage;