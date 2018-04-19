import React, {Component} from 'react';

import SearchCloseButton from './SearchCloseButton';
import SearchInput from './SearchInput';
import BookItem from './BookItem';

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
					<ol className="books-grid">
						{
							this.props.books.length > 0 ?
								this.props.books.map(book => (
									<BookItem
										image={book.imageLinks.smallThumbnail}
										style={{width: 128, height: 193}}
										{...book}
										key={book.id}/>))
								: <span>No results found!</span>

						}
					</ol>
				</div>
			</div>
		);
	}
}