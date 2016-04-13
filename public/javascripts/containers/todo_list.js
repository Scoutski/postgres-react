import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems, updateItem } from '../redux/actions/todo';

export class TodoList extends Component {
	componentWillMount() {
		this.props.fetchItems();
	}

	renderItems() {
		if (this.props.todos.length === 0) return(<p>Loading...</p>)
		return this.props.todos.map((todo) => {
			return (
				<li className='list-group-item' key={todo.id}>
					<label className='pull-xs-right checkbox-inline'>
						<input
							type='checkbox'
							checked={todo.complete}
							onChange={() => this.updateTodo(todo)}
						/>
						Completed
					</label>
					<strong>{todo.text}</strong>
				</li>
			)
		})
	}

	render() {
		return (
			<ul className='list-group'>
				{this.renderItems()}
			</ul>
		);
	}

	updateTodo(todo) {
		this.props.updateItem(todo);
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		todos: todos
	}, dispatch);
}

export default connect(mapStateToProps, { fetchItems, updateItem })(TodoList);
