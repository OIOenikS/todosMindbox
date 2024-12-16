import { FC, useState } from 'react'
import { TControlPanel } from './type'

import styles from './control-panel.module.scss'

export const ControlPanel: FC<TControlPanel> = ({
	itemsLeft,
	refClearBttn,
	setCurrentList,
	currentList,
}) => {
	return (
		<div className={styles.container}>
			<p className={styles.status}>{`${itemsLeft} items left`}</p>
			<div className={styles.control}>
				<button
					className={`${styles.bttn} ${
						currentList === 'all' && styles['bttn-active']
					}`}
					type='button'
					onClick={() => setCurrentList('all')}
				>
					All
				</button>
				<button
					className={`${styles.bttn} ${
						currentList === 'active' && styles['bttn-active']
					}`}
					type='button'
					onClick={() => setCurrentList('active')}
				>
					Active
				</button>
				<button
					className={`${styles.bttn} ${
						currentList === 'completed' && styles['bttn-active']
					}`}
					type='button'
					onClick={() => setCurrentList('completed')}
				>
					Completed
				</button>
			</div>
			<button className={styles.bttn} type='button' ref={refClearBttn}>
				Clear completed
			</button>
		</div>
	)
}
