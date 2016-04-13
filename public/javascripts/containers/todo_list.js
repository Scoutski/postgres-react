import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	fetchItems,
	updateItem,
	deleteItem
} from '../redux/actions/todo';
import TodoItem from '../components/todo_item'
import NewTodo from '../components/new_todo';

export class TodoList extends Component {
	componentWillMount() {
		this.props.fetchItems();
	}

	renderItems() {
		if (this.props.todos.length === 0) return(<p>Loading...</p>)
		return this.props.todos.map((todo) => {
			return (
				<TodoItem
					key={todo.id}
					todo={todo}
					deleteTodo={this.deleteTodo}
					updateTodo={this.updateTodo.bind(this)}
				/>
			)
		})
	}

	render() {
		return (
			<ul className='list-group'>
				{this.renderItems()}
				<NewTodo
					addToDo={this.addTodo}
				/>
			</ul>
		);
	}

	updateTodo(todo, type) {
		if (type === 'checkbox') {
			const completeChange = todo.complete ? false : true;
			const updatedItem = {
				id: todo.id,
				text: todo.text,
				complete: completeChange
			};
			this.props.updateItem(updatedItem);
		} else if (type === 'text') {
			this.props.updateItem(todo);
		}
	}

	deleteTodo(todoId) {
		this.props.deleteItem(todoId);
	}

	addTodo(todo) {
		this.props.addItem(todo);
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

export default connect(mapStateToProps, {
	fetchItems,
	updateItem,
	deleteItem
})(TodoList);
