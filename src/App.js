import React from 'react'
import {Route} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'

import Title from './components/Title';
import BookContent from './components/BookContent';
import SearchButton from './components/SearchButton';
import Search from './components/Search';

class BooksApp extends React.Component {
	state = (localStorage.myreads && JSON.parse(localStorage.myreads)) || {
		searchResults: [],
		query: '',
		books: [],
		bookshelves: [
			{
				id: 'currentlyReading',
				title: 'Currently Reading',
				books: [],
			},
			{
				id: 'wantToRead',
				books: [],
				title: "Want to Read",
			},
			{
				id: 'read',
				books: [],
				title: "Read",
			}
		],
	}

	componentDidUpdate() {
		localStorage.myreads = JSON.stringify(this.state);
	}

	handleBookshelfChange = (book) => (bookshelfId) => {
		const bookshelves = this.state.bookshelves
			.map(bookshelf => ({
				...bookshelf,
				books: (bookshelf.id === bookshelfId)
					? [book, ...bookshelf.books]
					: bookshelf.books.filter(b => b.id !== book.id),
			}));

		this.setState({
			bookshelves,
		});
	}

	handleQueryChange = (query) => {
		if (query) {
			BooksAPI.search(query)
				.then(searchResults => {
					if (searchResults.error) {
						this.setState({
							query,
							searchResults: [],
						});
					} else {
						this.setState({
							query,
							searchResults,
						});
					}
				})
				.catch(
					// TODO: handle rejection
				);
		} else {
			this.setState(
				{
					query,
					searchResults: [],
				}
			)
		}
	};

	render() {
		return (
		<div className="app">
				<Route exact path="/search"
					render={props =>
						<Search route="/"
							placeholder="Search by title or author"
							query={this.state.query}
							onChange={this.handleQueryChange}
							onAddBook={this.handleBookshelfChange}
							books={this.state.searchResults}
						/>
					}
				/>
				<Route exact path="/"
					render={props => (
						<div className="list-books">
							<Title title="My Reads"/>
							<BookContent
								bookshelves={this.state.bookshelves}
								onBookshelfChange={this.handleBookshelfChange}/>
							<SearchButton title="Add a book" route="/search"/>
						</div>
					)}
				/>
		</div>
		)
	}
}

export default BooksApp
