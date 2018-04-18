import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import SearchCloseButton from './SearchCloseButton';
import SearchInput from './SearchInput';

import '../App.css';

export default class SearchButton extends Component {
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<SearchCloseButton toPath={this.props.route} />
					<SearchInput placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.query}/>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>
			</div>
		);
	}
}