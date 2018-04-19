import React from 'react'
import {Route} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'

import Title from './components/Title';
import BookContent from './components/BookContent';
import SearchButton from './components/SearchButton';
import Search from './components/Search';

class BooksApp extends React.Component {
	state = {
		searchResults: [],
		query: '',
		bookshelves: [
			{
				title: 'Currently Reading',
				books: [
					{
						id: 1,
						style: {
							width: 128,
							height: 193,
						},
						image: `http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api`,
						title: `To Kill a Mockingbird`,
						author: `Harper Lee`,
					},
					{
						id: 2,
						style: {
							width: 128,
							height: 193,
						},
						image: `http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api`,
						title: `Ender's Game`,
						author: `Orson Scott Card`
					},
				],
			},
			{
				books: [
					{
						id: 3,
						style: {
							width: 128,
							height: 188,
						},
						image: `http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api`,
						title: `1776`,
						author: `David McCullough`,
					},
					{
						id: 4,
						style: {
							width: 128,
							height: 188,
						},
						image: `http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api`,
						title: `Harry Potter and the Sorcerer's Stone`,
						author: `J.K. Rowling`
					},
				],
				title: "Want to Read",
			},
			{
				books: [
					{
						id: 5,
						style: {
							width: 128,
							height: 192,
						},
						image: `http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api`,
						title: `The Hobbit`,
						author: `J.R.R. Tolkien`,
					},
					{
						id: 6,
						style: {
							width: 128,
							height: 174,
						},
						image: `http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api`,
						title: `Oh, the Places You'll Go!`,
						author: `Seuss`
					},
					{
						id: 7,
						style: {
							width: 128,
							height: 192,
						},
						image: `http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api`,
						title: `The Adventures of Tom Sawyer`,
						author: `Mark Twain`
					},
				],
				title: "Read",
			}
		],
	}

	componentDidMount() {

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
							books={this.state.searchResults}
						/>
					}
				/>
				<Route exact path="/"
					render={props => (
						<div className="list-books">
							<Title title="My Reads"/>
							<BookContent bookshelves={this.state.bookshelves} />
							<SearchButton title="Add a book" route="/search"/>
						</div>
					)}
				/>
		</div>
		)
	}
}

export default BooksApp
