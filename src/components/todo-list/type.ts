import { TTask } from '../../types/types'

export type TToDoListProps = {
	tasks: TTask[]
	setStatusTask: (id: string) => void
}
