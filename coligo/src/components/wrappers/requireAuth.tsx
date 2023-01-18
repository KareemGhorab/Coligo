import { useAppSelector } from "hooks/state.hooks"
import { Navigate } from "react-router-dom"

export default function RequireAuth(props: {
	children: JSX.Element
	isAuthRequired?: boolean
}) {
	const { children, isAuthRequired = true } = props

	const { user } = useAppSelector((state) => state.user)

	if (isAuthRequired && !user) {
		return <Navigate to="/home" replace={true} />
	}
	if (!isAuthRequired && user) {
		return <Navigate to="/dashboard" replace={true} />
	}

	return children
}
