import Assignment from "components/icons/assignment"
import QuizIcon from "components/icons/quiz"
import { Quiz, Types } from "interfaces/Quiz"

export default function ScheduleMiniItem(props: {
	className?: string
	quiz: Quiz
}) {
	const {
		quiz: { course, date, title, topic, type },
		className,
	} = props

	const dateObj = new Date(date)
	const dateFormat = `${dateObj.getUTCDay()}-${dateObj.getUTCMonth()}-${dateObj.getUTCFullYear()}`

	return (
		<article className={`border-b-2 py-3 ${className}`}>
			<header className="flex gap-2 mb-1">
				<figure className="text-primary-200">
					{type === Types.Assignment && <Assignment />}
					{type === Types.Quiz && <QuizIcon />}
				</figure>
				<h3 className="font-bold text">{title}</h3>
			</header>
			<section>
				<p className="text-gray-400">Course: {course}</p>
				<p className="text-gray-400">Topic: {topic}</p>
				<p className="text-gray-400">Due: {dateFormat}</p>
				<button className="btn-secondary py-1 w-full rounded-full mt-1">
					{type === Types.Assignment && "Solve assignment"}
					{type === Types.Quiz && "Start quiz"}
				</button>
			</section>
		</article>
	)
}
