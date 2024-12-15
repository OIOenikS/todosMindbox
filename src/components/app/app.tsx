import { FC } from 'react';
import '../../styles/index.scss';
import styles from './app.module.scss';

import { ToDoPage } from '../page/todo-page/todo-page';

const App: FC = () => {

  return (
    <div className={styles.app}>
      <ToDoPage />
    </div>
  )
}

export default App;