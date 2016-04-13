import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Main extends Component {
	static fetchData({ dispatch }) {

	}

	render() {
		return (
			<div className='Container'>
				<h1>Well done, Mike! Your app is running!</h1>
			</div>
		)
	}
}

export default connect()(Main)