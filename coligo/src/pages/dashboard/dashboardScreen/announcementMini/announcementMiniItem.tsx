import { Announcement } from "interfaces/Announcement"

export default function AnnouncementMiniItem(props: {
	className?: string
	announcement: Announcement
}) {
	const {
		className,
		announcement: {
			course,
			description,
			user: { image, username },
		},
	} = props

	return (
		<article
			className="grid gap-3
            border-b pb-2
            xs:border-0 xs:pb-0
            xs:grid-cols-announcementsMini"
		>
			<div
				className={`
                    flex 
                    xs:border-r border-gray-300
                    pr-2
                    col-span-1
                    ${className}`}
			>
				<figure className="w-8 mr-1">
					<img className="w-full" src={image} alt={username} />
				</figure>
				<div className="flex flex-col">
					<span className="font-semibold text-sm">{username}</span>
					<span
						className="
                        text-gray-300
                        text-sm"
					>
						{course}
					</span>
				</div>
			</div>
			<p className="col-span-1">{description}</p>
		</article>
	)
}
