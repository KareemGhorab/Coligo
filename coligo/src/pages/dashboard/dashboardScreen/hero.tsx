import { Link } from "react-router-dom"

export default function Hero(props: { className?: string }) {
	const { className } = props

	return (
		<header
			className={`
        p-5 flex gap-10
        overflow-hidden
        ${className}`}
		>
			<section className="flex flex-col gap-3">
				<div>
					<h2
						className="
                    w-fit mb-1
                    font-bold text-transparent text-4xl 
                    bg-clip-text bg-gradient-to-r bg-red-500
                    from-primary-500 to-primary-200"
					>
						EXAMS TIME
					</h2>
					<p>
						Here we are. Are you ready to fight? Don't worry, we prepared some
						tips to be ready for your exams
					</p>
				</div>
				<div>
					<div className="text-gray-300 mb-2">
						<q>Lorem ipsum dolor sit amet.</q>
						<span>-Kareem Hany</span>
					</div>
					<Link to="courses">
						<button className="btn btn-primary">View exams tips</button>
					</Link>
				</div>
			</section>
			<figure
				className="lg:block hidden
            m-auto"
			>
				<img className="w-60" src="/laptop.svg" />
			</figure>
		</header>
	)
}
