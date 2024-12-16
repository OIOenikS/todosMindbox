import { TTask } from '../../types/types'

export type TToDoListItemProps = {
  task: TTask;
  setStatusTask: (id: string) => void;
}