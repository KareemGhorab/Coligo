import { useEffect, useState } from "react"

export const useWindow = () => {
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	])

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight])
		}

		window.addEventListener("resize", handleWindowResize)

		return () => {
			window.removeEventListener("resize", handleWindowResize)
		}
	})

	return windowSize
}
