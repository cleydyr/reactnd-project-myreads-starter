import React, {Component} from 'react';
import '../App.css';

export default class BookshelfChanger extends Component {

	render() {
		return (
			<div className="book-shelf-changer">
				<select value={this.props.current} onChange={this.props.onChange}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}