import { useState } from "react"
import { ListItem } from "./interfaces"
import SideNavListItem from "./sideNavListItem"

import Home from "components/icons/home"
import Schedule from "components/icons/schedule"
import Book from "components/icons/book"
import GradeBook from "components/icons/gradebook"
import Performance from "components/icons/performance"
import Megaphone from "components/icons/megaphone"

export default function SideNavList(props: { className?: string }) {
	const { className } = props
	const [list] = useState<ListItem[]>([
		{
			title: "Dashboard",
			href: "",
			icon: <Home />,
		},
		{
			title: "Schedule",
			href: "schedule",
			icon: <Schedule />,
		},
		{
			title: "Courses",
			href: "courses",
			icon: <Book />,
		},
		{
			title: "Gradebook",
			href: "gradebook",
			icon: <GradeBook />,
		},
		{
			title: "Performance",
			href: "performance",
			icon: <Performance />,
		},
		{
			title: "Announcement",
			href: "announcement",
			icon: <Megaphone />,
		},
	])

	return (
		<ul
			className={`
		grid grid-cols-1 gap-2
		w-full
		${className}`}
		>
			{list.map((li) => (
				<SideNavListItem key={li.title} li={li} />
			))}
		</ul>
	)
}
