import { FC } from 'react'
import { TToDoListProps } from './type'
import styles from './todo-list.module.scss'

import { ToDoListItem } from '../todo-list-item/todo-list-item'

export const ToDoList: FC<TToDoListProps> = ({ tasks, setStatusTask }) => {
	return (
		<ul className={styles.list}>
			{tasks.map((task) => {
				return (
					<ToDoListItem
						key={task.id}
						task={task}
						setStatusTask={setStatusTask}
					/>
				)
			})}
		</ul>
	)
}
