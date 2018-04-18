import React, {Component} from 'react';

import SearchCloseButton from './SearchCloseButton';
import SearchInput from './SearchInput';

import '../App.css';

export default class Search extends Component {
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