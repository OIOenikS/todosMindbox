import { FC } from 'react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TTask } from '../../types/types'
import { TFormProps } from './type'

import styles from './form.module.scss'

export const Form: FC<TFormProps> = ({ setTasks }) => {
	const [value, setValue] = useState<string>('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const input = e.target
		setValue(input.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const id = uuidv4()
		const newTask: TTask = {
			id,
			task: value,
			status: 'active',
		}
		setTasks((prevTasks) => {
			if (!prevTasks) {
				return [newTask]
			} else {
				return [...prevTasks, newTask]
			}
		})
		setValue('')
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<button type='button' className={styles.bttn} aria-hidden={true}></button>
			<label className={styles.label}>
				<input
					type='text'
					className={styles.input}
					onChange={handleChange}
					value={value}
					placeholder='What needs to be done?'
					required
				/>
			</label>
		</form>
	)
}
