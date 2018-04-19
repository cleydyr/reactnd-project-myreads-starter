import React, {Component} from 'react';

import '../App.css';

export default class SearchInput extends Component {
	render() {
		return (
			<div className="search-books-input-wrapper">
				<input type="text" placeholder={this.props.placeholder} onChange={({target}) => this.props.onChange(target.value)} value={this.props.query} />
			</div>
		);
	}
}