import { useFetch } from "hooks/fetch.hook"
import { Announcement } from "interfaces/Announcement"
import AnnouncementMiniItem from "./announcementMiniItem"
import Loading from "components/ui/loading"

export default function AnnouncementsMini(props: { className?: string }) {
	const { className } = props

	const { isLoading, isError, data } = useFetch({
		baseURL: "https://coligo.vercel.app",
		url: "/announcements",
		method: "get",
	})

	return (
		<article className={`p-3 ${className}`}>
			<header className="mb-3">
				<h2 className="font-bold mb-2">Announcements</h2>
				<p className="text-sm text-gray-400">
					We educate warriors! Keep updated:
				</p>
			</header>
			{isError ? (
				<p className="text-red-600">Error fetching announcements</p>
			) : isLoading ? (
				<Loading />
			) : (
				<section className="grid gap-5 px-2">
					{data.documents.map((announcement: Announcement) => (
						<AnnouncementMiniItem
							key={announcement._id}
							announcement={announcement}
						/>
					))}
				</section>
			)}
		</article>
	)
}
