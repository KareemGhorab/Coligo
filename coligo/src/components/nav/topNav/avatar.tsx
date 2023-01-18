import { useAppSelector } from "hooks/state.hooks"
import { Link } from "react-router-dom"

export default function Avatar() {
	const { user } = useAppSelector((state) => state.user)

	return (
		<div className="relative">
			<Link to="">
				<figure
					className=" w-7 h-7
				rounded-full"
				>
					<img src={user?.image} alt={user?.username} />
				</figure>
			</Link>
		</div>
	)
}
