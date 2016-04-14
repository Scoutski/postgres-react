import React, { Component } from 'react';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: this.props.todo.text
		};

		this.onInputChange = this.onInputChange.bind(this);
	}
	render() {
		return (
			<li className='list-group-item todo-item'>
				<button
					className='btn-primary pull-xs-right delete-btn'
					onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
				<label className='pull-xs-right checkbox'>
					<input
						type='checkbox'
						checked={this.props.todo.complete}
						onChange={() => this.props.updateTodo(this.props.todo, 'checkbox')}
					/>
					Completed
				</label>
				<input
					type='text'
					className='form-control todoInput'
					onChange={this.onInputChange}
					value={this.state.text}
				>
				</input>
			</li>
		)
	}

	onInputChange(event) {
		this.setState({
			text: event.target.value
		});

		var updatedTodo = {
			id: this.props.todo.id,
			text: event.target.value,
			complete: this.props.todo.complete
		}
		this.props.updateTodo(updatedTodo, 'text')
	}
}
