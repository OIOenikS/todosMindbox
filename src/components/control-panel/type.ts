import { TStatusToDoPage } from '../../types/types'

export type TControlPanel = {
	itemsLeft: number
	refClearBttn: React.MutableRefObject<HTMLButtonElement | null>
	setCurrentList: React.Dispatch<React.SetStateAction<TStatusToDoPage>>
	currentList: TStatusToDoPage
}
