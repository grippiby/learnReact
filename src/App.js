import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
	const [todos, setTodos] = useState([])
	const addTodoHandler = (text) => {
		const newTodo = {
			id: uuidv4(),
			text: text,
			isCompleted: false,
		}
		console.log(newTodo)
		return setTodos([...todos, newTodo])
	}
	const deleteTodoHandler = (id) => {
		return setTodos(todos.filter((todo) => todo.id !== id))
	}
	const toggleTodoHandler = (id) => {
		return setTodos(
			todos.map((todo) => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			})
		)
	}
	const resetTodosHandler = () => {
		return setTodos([])
	}
	const deleteCompletedTodos = () => {
		return setTodos(todos.filter((todo) => !todo.isCompleted))
	}
	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

	return (
		<div className="App">
			<h1>Todo App</h1>
			<br></br>
			<TodoForm addTodo={addTodoHandler} />
			<br></br>
			{todos.length !== 0 && (
				<TodosActions
					resetTodos={resetTodosHandler}
					deleteCompletedTodos={deleteCompletedTodos}
					todoCounter={completedTodosCount}
				/>
			)}
			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{completedTodosCount > 0 && (
				<h2>{`You complete ${completedTodosCount} ${
					completedTodosCount > 1 ? 'todoS' : 'todo'
				}`}</h2>
			)}
		</div>
	)
}

export default App
