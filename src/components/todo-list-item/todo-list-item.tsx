import { FC } from 'react';
import { TToDoListItemProps } from './type' 
import styles from './todo-list-item.module.scss';

export const ToDoListItem: FC<TToDoListItemProps> = ({
  task, 
  setStatusTask 
}) => {

  return (
    <li className={`${styles.container} ${
      task.status === 'completed' && styles['container-completed']
    }`}>
      <button
        className={`${styles.bttn} ${
          task.status === 'completed' && styles['bttn-completed']
        }`}
        onClick={() => setStatusTask(task.id)}
      >
      </button>
      {task.task}
    </li>
  )
}