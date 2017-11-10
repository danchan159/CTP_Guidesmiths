import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GuideFormPage from './guide-form/GuideFormPage.js';
import GuideListPage from './guide-list/GuideListPage.js';
import SignUpPage from './sign-up/SignUpPage.js';
import LoginPage from './login/LoginPage.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router>
		<Route path="/" component={App}/>
	</Router>
	), document.getElementById('root'));
registerServiceWorker();
