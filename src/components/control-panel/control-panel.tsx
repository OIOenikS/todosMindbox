import { FC } from 'react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TTask } from '../../types/types'
import { TFormProps } from './type'

import styles from './control-panel.module.scss'

export const ControlPanel: FC = () => {

	return (
    <div className={styles.container}>
      <p className={styles.status}>
        {`2 items left`}
      </p>
      <div className={styles.control}>
        <button 
          className={styles.bttn} 
          type="button"
        >
          All
        </button>
        <button 
          className={styles.bttn} 
          type="button"
          onClick={() => {}}
        >
          Active  
        </button>
        <button 
          className={styles.bttn} 
          type="button"
          onClick={() => {}}
        >
          Completed
        </button>
      </div>
      <button
        className={styles.bttn} 
        type="button"
        onClick={() => {}}
      >
        Clear completed
      </button>
    </div>
	)
}