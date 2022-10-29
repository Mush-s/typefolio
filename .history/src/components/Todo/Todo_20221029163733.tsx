import React, { useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
	const [value, setValue] = useState<string>('')
	const [todos, setTodos] = useState<Todo[]>([])
	const [byDate, setByDate] = useState<string>()

	interface Todo {
		id: number
		inputValue: string
	}

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const newTodo: Todo = {
			id: todos.length,
			inputValue: value
		}
		if (value) {
			setTodos([newTodo, ...todos])
			setValue('')
		} else {
			setTodos([...todos])
		}
	}
	function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}
	function editHandler(id: number, inputValue: string) {
		const newTodos: Todo[] = todos.map((todo) => {
			if (todo.id === id) {
				todo.inputValue = inputValue
			}
			return todo
		})
		setTodos(newTodos)
	}

	function deleteHandler(id: number) {
		setTodos(todos.filter((todo) => todo.id !== id))
	}
	return (
		<div>
			<h1 className='todo'>Todo</h1>
			<form
				onSubmit={(e) => {
					submitHandler(e)
				}}
			>
				<input
					type="text"
					onChange={(e) => {
						changeHandler(e)
					}}
					value={value}
				/>
				<input type="date" placeholder="日付を選択してください" />
				<input type="submit" placeholder="Push" />
			</form>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoList
							id={todo.id}
							value={todo.inputValue}
							onChange={(e) => editHandler(todo.id, e.target.value)}
							onClick={deleteHandler}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todo
