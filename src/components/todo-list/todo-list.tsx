import { FC } from 'react';
import { TToDoListProps } from './type' 
import styles from './todo-page.module.scss';

import { ToDoListItem } from '../todo-list-item/todo-list-item'

export const ToDoList: FC<TToDoListProps> = ({ tasks }) => {
  
  return (
    <ul> 
      {tasks.map((task) => {
        return (
          <ToDoListItem key={task.id}>
            {task}
          </ToDoListItem>
        )
      })}
    </ul>
  )
}