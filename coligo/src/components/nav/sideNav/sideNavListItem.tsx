import { Link } from "react-router-dom"
import { ListItem } from "./interfaces"

export default function SideNavListItem(props: { li: ListItem }) {
	const {
		li: { href, icon, title },
	} = props

	return (
		<li className="w-full px-1">
			<Link
				className="w-full
            py-3 flex items-center gap-3
            text-lg font-semibold
            rounded-sm
			pl-12
            hover:bg-white hover:text-primary-400
            group
            "
				to={href}
			>
				<span>{icon}</span>
				<span>{title}</span>
			</Link>
		</li>
	)
}
