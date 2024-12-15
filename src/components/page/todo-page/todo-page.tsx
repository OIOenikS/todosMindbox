import { FC, useState } from 'react';
import { TTask } from '../../../types/types';
import styles from './todo-page.module.scss';

import { Form } from '../../form/form';
import { ToDoList } from '../../todo-list/todo-list';
import { ControlPanel } from '../../control-panel/control-panel';


export const ToDoPage: FC = () => {
  const [tasks, setTasks] = useState<TTask[]>([
    {
      id: '1',
      task: 'Тестовое задание',
      status: 'active'
    },
    {
      id: '2',
      task: 'Прекрасный код',
      status: 'completed'
    },
    {
      id: '3',
      task: 'Покрытие тестами',
      status: 'active'
    }
  ])


  return (
    <>
      <header>
        <h1 className={styles.title}>todos</h1>
      </header>
      <main className={styles.main}>
        <Form setTasks={setTasks}/>
        <ToDoList tasks={tasks} />
        <ControlPanel />
      </main>
    </>
  )
}