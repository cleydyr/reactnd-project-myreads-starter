import React, {Component} from 'react';
import '../App.css';
import Bookshelf from './Bookshelf';

export default class BookContent extends Component {
	render() {
		return (
			<div className="list-books-content">
				<div>
					{this.props.bookshelves.map(
						bookshelf => <Bookshelf title={bookshelf.title} books={bookshelf.books} key={bookshelf.title}/>
					)}
				</div>
			</div>
		);
	}
};