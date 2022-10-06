import styles from './Todo.module.css'
import { FaCheck } from 'react-icons/fa'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
const Todo = ({ todo, deleteTodo, toggleTodo }) => {
	return (
		<div
			className={`${styles.todo} ${
				todo.isCompleted ? styles.completedTodo : ''
			}`}
			/* Удаление по двойному клику */
			/* 	onDoubleClick={() => deleteTodo(todo.id)} */
		>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.text}</div>
			<RiDeleteBin2Line
				className={styles.deleteIcon}
				onClick={() => deleteTodo(todo.id)}
			/>
			<FaCheck
				className={styles.checkIcon}
				onClick={() => toggleTodo(todo.id)}
			/>
		</div>
	)
}

export default Todo
