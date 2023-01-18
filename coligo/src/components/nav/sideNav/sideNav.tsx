import { Link } from "react-router-dom"
import SideNavList from "./sideNavList"
import { useAppDispatch, useAppSelector } from "hooks/state.hooks"
import { useWindow } from "hooks/window.hook"
import { toggleSide } from "store/navSlice"
import X from "components/icons/x"

export default function SideNav(props: { className?: string }) {
	const { className } = props

	const [windowWidth] = useWindow()
	const { isSideHidden } = useAppSelector((state) => state.nav)
	const dispatch = useAppDispatch()

	if (isSideHidden && windowWidth < 768) return <></>

	return (
		<nav className={`side-nav ${className}`}>
			<button
				className="absolute top-2 left-2
				block md:hidden
				p-1
				rounded-full
				hover:bg-white hover:text-primary-400"
				onClick={() => dispatch(toggleSide())}
			>
				<X />
			</button>

			<Link to="/dashboard">
				<h1 className="font-bold text-3xl font-sofia">Coligo</h1>
			</Link>
			<SideNavList />
		</nav>
	)
}
