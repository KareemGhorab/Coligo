import { Link } from "react-router-dom"

import Badge from "./badge"
import Bell from "components/icons/bell"
import Envelope from "components/icons/envelope"

export default function Notifications() {
	return (
		<div
			className="flex gap-2
        text-primary-400"
		>
			<Link to="schedule" className="relative">
				<Bell />
				<Badge />
			</Link>

			<Link to="announcement" className="relative">
				<Envelope />
				<Badge />
			</Link>
		</div>
	)
}
