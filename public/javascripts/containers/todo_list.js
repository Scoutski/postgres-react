import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../redux/actions/todo';

export default class TodoList extends Component {
	componentWillMount() {
		this.props.fetchItems();
	}

	render() {
		return (
			<div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps, { fetchItems })(TodoList);
