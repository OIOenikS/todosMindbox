import { FC, useState, useRef, useEffect } from 'react'
import '../../styles/index.scss'
import styles from './app.module.scss'

import { TTask, TStatusToDoPage } from '../../types/types'
import { clearCompleted, checkVisibleTaskList } from '../../utils/utils'

import { Form } from '../form/form'
import { ToDoList } from '../todo-list/todo-list'
import { ControlPanel } from '../control-panel/control-panel'

export const App: FC = () => {
	const refClearBttn = useRef<HTMLButtonElement | null>(null)
	const [tasks, setTasks] = useState<TTask[] | null>(null)
	const [currentList, setCurrentList] = useState<TStatusToDoPage>('all')

	const setStatusTask = (id: string) => {
		setTasks((prevTasks) => {
			if (!prevTasks) return null
			return prevTasks.map((task) => {
				if (task.id !== id) {
					return task
				} else {
					const newStatus = task.status === 'active' ? 'completed' : 'active'
					return { ...task, status: newStatus }
				}
			})
		})
	}

	const handleClearCompleted = () => {
		setTasks((prevTasks) => {
			if (!prevTasks) return null
			return clearCompleted(prevTasks)
		})
	}

	useEffect(() => {
		if (!refClearBttn.current) return
		refClearBttn.current.addEventListener('click', handleClearCompleted)
		return () => {
			refClearBttn.current?.removeEventListener('click', handleClearCompleted)
		}
	})

	return (
		<div className={styles.app}>
			<header>
				<h1 className={styles.title}>todos</h1>
			</header>
			<main className={styles.main}>
				<Form setTasks={setTasks} />
				{tasks && tasks.length !== 0 ? (
					<ToDoList
						tasks={checkVisibleTaskList(currentList, tasks)}
						setStatusTask={setStatusTask}
					/>
				) : (
					<span className={styles.text}>Нет задач</span>
				)}
				<ControlPanel
					itemsLeft={tasks?.length || 0}
					refClearBttn={refClearBttn}
					setCurrentList={setCurrentList}
					currentList={currentList}
				/>
			</main>
		</div>
	)
}

export default App
