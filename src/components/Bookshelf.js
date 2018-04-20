import React, {Component} from 'react';
import '../App.css';
import BookItem from './BookItem';

export default class Bookshelf extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books.map(book => (
								<BookItem
									onBookshelfChange={this.props.onBookshelfChange(book)}
									current={this.props.id}
									image={book.imageLinks.smallThumbnail}
									style={{width: 128, height: 193}}
									{...book}
									key={book.id}
								/>
							))
						}
					</ol>
				</div>
			</div>
		);
	}
};

module.export = Bookshelf;