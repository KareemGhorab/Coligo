import { useAppSelector } from "hooks/state.hooks"

export default function AuthBtn() {
	const { user } = useAppSelector((state) => state.user)

	return <div></div>
}
