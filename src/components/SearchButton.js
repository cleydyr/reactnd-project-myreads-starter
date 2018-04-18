import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import '../App.css';

export default class SearchButton extends Component {
	render() {
		return (
			<div className="open-search">
				<Link to={this.props.route}>{this.props.title}</Link>
			</div>
		);
	}
}