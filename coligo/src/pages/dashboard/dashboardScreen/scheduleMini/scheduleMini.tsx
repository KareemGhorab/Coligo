import Loading from "components/ui/loading"
import { useFetch } from "hooks/fetch.hook"
import { Quiz } from "interfaces/Quiz"
import ScheduleMiniItem from "./scheduleMiniItem"

export default function ScheduleMini(props: { className?: string }) {
	const { className } = props
	const { data, isError, isLoading } = useFetch({
		baseURL: "http://localhost:3001",
		url: "/quizzes",
	})

	return (
		<article className={`p-3 ${className}`}>
			<h2 className="font-bold text-lg">What's due</h2>
			{isLoading ? (
				<Loading />
			) : (
				<section>
					{data.documents.map((quiz: Quiz) => (
						<ScheduleMiniItem key={quiz._id} quiz={quiz} />
					))}
				</section>
			)}
		</article>
	)
}
