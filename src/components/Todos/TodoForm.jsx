import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState('')
	const handleFormSubmit = (event) => {
		event.preventDefault()
		//проверка, если текст отсутствует, то ничего не добавляется
		if (!text || !text.trim().length) {
			setText('')
			return
		}
		addTodo(text)
		setText('')
	}

	return (
		<div className={styles.todoFormContainer}>
			<div>
				<form onSubmit={handleFormSubmit}>
					<input
						placeholder="Write your task!"
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<Button type="submit">AddTodo</Button>
				</form>
			</div>
		</div>
	)
}

export default TodoForm
