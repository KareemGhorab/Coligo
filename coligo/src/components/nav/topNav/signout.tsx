import { useAppDispatch } from "hooks/state.hooks"
import { signout } from "store/userSlice"

export default function Signout() {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() => dispatch(signout())}
			className="btn-primary font-bold py-1
				w-20
				rounded-full
				text-xs
				xs:text-base"
		>
			Sign out
		</button>
	)
}
