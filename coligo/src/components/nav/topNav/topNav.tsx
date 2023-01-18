import { useAppSelector } from "hooks/state.hooks"
import SearchBar from "./searchBar"
import Notifications from "./notifications"
import Avatar from "./avatar"
import NavBtn from "../navBtn"
import Signout from "./signout"

export default function TopNav(props: { className?: string }) {
	const { className } = props
	const { user } = useAppSelector((state) => state.user)

	return (
		<nav
			className={`xs:px-5 px-0
		flex items-center justify-between gap-1
		shadow-sm
		${className}`}
		>
			<div className="flex--centered gap-2">
				<NavBtn className="md:hidden block" />
				<h2
					className="
					text-lg
        text-primary-800 xs:text-2xl
        font-bold"
				>
					Welcome {user?.username.slice(0, 10)},
				</h2>
				<Signout />
			</div>
			<aside className="flex gap-5">
				<SearchBar />
				<Notifications />
				<Avatar />
			</aside>
		</nav>
	)
}
