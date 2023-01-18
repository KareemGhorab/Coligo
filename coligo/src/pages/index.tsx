import { useAppSelector } from "hooks/state.hooks"
import { Navigate } from "react-router-dom"

export default function Index() {
	const { user } = useAppSelector((state) => state.user)

	if (user) return <Navigate to="/dashboard" />
	return <Navigate to="/home" />
}
