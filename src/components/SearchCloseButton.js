import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import '../App.css';

export default class SearchCloseButton extends Component {
	render() {
		return (
			<Link className="close-search" to={this.props.toPath}>Close</Link>
		);
	}
}