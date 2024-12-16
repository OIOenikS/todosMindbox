import { TTask } from '../../types/types'

export type TFormProps = {
  setTasks: React.Dispatch<React.SetStateAction<TTask[]|null>>;
}