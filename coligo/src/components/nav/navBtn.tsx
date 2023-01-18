import { useAppDispatch, useAppSelector } from "hooks/state.hooks"
import { toggleSide } from "store/navSlice"

export default function NavBtn(props: { className?: string }) {
	const { className } = props
	const dispatch = useAppDispatch()
	const nav = useAppSelector((state) => state.nav)

	console.log(nav)

	return (
		<button className={`${className}`} onClick={() => dispatch(toggleSide())}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="
                w-11 h-11 p-2
                rounded-full
                hover:bg-gray-500 hover:text-white"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	)
}
