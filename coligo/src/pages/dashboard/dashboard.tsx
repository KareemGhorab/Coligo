import SideNav from "components/nav/sideNav/sideNav"
import TopNav from "components/nav/topNav/topNav"
import { Outlet } from "react-router-dom"

export default function Dashboard() {
	return (
		<main
			className="
			min-h-screen
			grid
			grid-cols-1
			grid-rows-dashboard
			md:grid-cols-dashboard
			"
		>
			<SideNav className="row-span-full" />
			<TopNav
				className="
			md:col-start-2 md:col-end-6"
			/>
			<main className="bg-primary-100 p-3">
				<Outlet />
			</main>
		</main>
	)
}
