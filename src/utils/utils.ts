import { TTask, TStatusToDoPage } from '../types/types';

export const clearCompleted = (tasks: TTask[]) => {
  return tasks.filter((task) => task.status === 'active');
}

export const checkVisibleTaskList = (currentList: TStatusToDoPage, tasks: TTask[]) => {
  if (currentList === 'all') return tasks;
  return tasks.filter((task) => {
    return task.status === currentList;
  })
}
