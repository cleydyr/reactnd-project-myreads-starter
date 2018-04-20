import React, {Component} from 'react';

import BookshelfChanger from './BookshelfChanger';

import '../App.css';

export default class BookItem extends Component {
	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{backgroundImage : `url(${this.props.image})`, ...this.props.style}}></div>
						<BookshelfChanger
							current={this.props.currentBookshelf}
							onChange={({target}) => this.props.onChange(target.value)}
						/>
					</div>
					<div className="book-title">{this.props.title}</div>
					{this.props.authors &&
						this.props.authors.map(author => <div className="book-authors" key={author}>{author}</div>)}
				</div>
			</li>
		);
	}
};