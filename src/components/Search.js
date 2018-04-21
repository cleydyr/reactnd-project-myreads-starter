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
							this.props.results.length > 0 ?
								this.props.results.map(result => {
									const [existingBook] = this.props.books.filter(existingBook => existingBook.id === result.id);
									return (
										<BookItem
											currentBookshelf={existingBook ? existingBook.bookshelfId : 'none'}
											onBookshelfChange={this.props.onAddBook(result)}
											image={result.imageLinks.smallThumbnail}
											style={{width: 128, height: 193}}
											{...result}
											key={result.id}
										/>)
								})
								: <span>No results found!</span>
						}
					</ol>
				</div>
			</div>
		);
	}
}