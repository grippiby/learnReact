import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'
const TodosActions = ({ resetTodos, deleteCompletedTodos, todoCounter }) => {
	return (
		<div className={styles.todosActionsContainer}>
			<Button
				title={'Reset'}
				onClick={() => {
					resetTodos()
				}}
			>
				<RiRefreshLine />
			</Button>
			<Button
				title={'Clear Completed Todos'}
				onClick={deleteCompletedTodos}
				disabled={!todoCounter}
			>
				<RiDeleteBin2Line />
			</Button>
		</div>
	)
}
export default TodosActions
