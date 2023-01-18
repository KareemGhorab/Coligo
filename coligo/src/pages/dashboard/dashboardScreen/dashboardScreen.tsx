import AnnouncementsMini from "./announcementMini/announcementsMini"
import Hero from "./hero"
import ScheduleMini from "./scheduleMini/scheduleMini"

export default function DashboardScreen(props: { className?: string }) {
	const { className } = props

	return (
		<section
			className={`grid 
			gap-y-4
			lg:gap-4
			grid-cols-1
			lg:grid-cols-4
		${className}`}
		>
			<Hero className="col-span-full lg:h-56 card" />
			<AnnouncementsMini
				className="
			card
			col-span-1
			md:col-span-3
        "
			/>
			<ScheduleMini className="col-span-1 card" />
		</section>
	)
}
