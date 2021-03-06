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
			},
			{
				id: 'wantToRead',
				title: "Want to Read",
			},
			{
				id: 'read',
				title: "Read",
			}
		],
	}

	componentDidUpdate() {
		localStorage.myreads = JSON.stringify(this.state);
	}

	handleBookshelfChange = (book) => (bookshelfId) => {
		const newBook = {
			...book,
			bookshelfId,
		};

		this.setState(({books}) => ({
			books: books.some(curBook => curBook.id === book.id)
				? books.map(curBook => curBook.id === book.id ? newBook : curBook)
				: [newBook, ...books],
		}));
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
							results={this.state.searchResults}
							books={this.state.books}
						/>
					}
				/>
				<Route exact path="/"
					render={props => {
						this.state.query && this.setState({query: '', searchResults: [],});
						return (
							<div className="list-books">
								<Title title="My Reads"/>
								<BookContent
									bookshelves={this.state.bookshelves}
									books={this.state.books}
									onBookshelfChange={this.handleBookshelfChange}/>
								<SearchButton title="Add a book" route="/search"/>
							</div>
						);
					}}
				/>
		</div>
		)
	}
}

export default BooksApp
