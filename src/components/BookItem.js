import React, {Component} from 'react';
import '../App.css';

export default class BookItem extends Component {
	render() {
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{backgroundImage : `url(${this.props.image})`, ...this.props.style}}></div>
						<div className="book-shelf-changer">
							<select>
								<option value="none" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.title}</div>
					{this.props.authors.map(author => <div className="book-authors">{author}</div>)}
				</div>
			</li>
		);
	}
};