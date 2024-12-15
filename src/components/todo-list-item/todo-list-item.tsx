import { FC } from 'react';
import { TToDoListItemProps } from './type' 
import styles from './todo-list-item.module.scss';

export const ToDoListItem: FC<TToDoListItemProps> = ( { children } ) => {
  
  return (
    <li className={styles.container}>
      <button
        className={styles.bttn}
      >
      </button>
      {children.task}
    </li>
  )
}