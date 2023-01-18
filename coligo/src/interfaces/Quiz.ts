export enum Types {
	Quiz = "quiz",
	Assignment = "assignment",
}
export interface Quiz {
	_id: string
	title: string
	type: Types
	course: string
	topic: string
	date: Date
}
