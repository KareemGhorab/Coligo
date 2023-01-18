import axios from "axios"

import { useAppDispatch } from "hooks/state.hooks"
import { useState } from "react"
import { signin } from "store/userSlice"

export default function Home() {
	const dispatch = useAppDispatch()
	const [isLoading, setIsLoading] = useState(false)

	const handleSignin = async () => {
		setIsLoading(true)
		const { data } = await axios.post("http://localhost:3001/users/signin")
		dispatch(signin(data.token))
		setIsLoading(false)
	}

	return (
		<div className="backdrop flex--centered">
			<main className="border py-5 px-10 rounded-lg">
				<header className="text-center mb-10">
					<h1 className="font-bold">
						Welcome to <span className="font-sofia text-xl">Coligo</span>
					</h1>
					<p>Start learning now!</p>
				</header>
				<button onClick={handleSignin} className="btn btn-primary w-full">
					{isLoading ? "Loading" : "Sign in"}
				</button>
			</main>
		</div>
	)
}
