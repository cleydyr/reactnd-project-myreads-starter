import React from 'react';
import '../App.css'

export default class Title extends React.Component {
	render() {
		return (
			<div className="list-books-title">
				<h1>{this.props.title}</h1>
			</div>
		);
	}
};

module.export = Title;