export default function SearchBar(props: { className?: string }) {
	const { className } = props
	return (
		<div
			className="relative hidden items-center
        lg:flex"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6 text-gray-200
                absolute left-1 z-10"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>

			<input
				placeholder="Search"
				className={`
            py-1 pl-8
            border rounded-full shadow-sm
            focus:outline-gray-300
            ${className}`}
			/>
		</div>
	)
}
