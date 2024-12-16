export type TTask = {
	id: string
	task: string
	status: 'active' | 'completed'
}

export type TStatusToDoPage = 'all' | 'active' | 'completed'
