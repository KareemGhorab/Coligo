import { User } from "./User"

export interface Announcement {
	_id: string
	course: string
	description: string
	user: User
}
