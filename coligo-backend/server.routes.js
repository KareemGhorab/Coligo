module.exports = (app) => {
	app.use("/users", require("./src/components/user/user.routes"))

	app.use(
		"/announcements",
		require("./src/components/announcement/announcement.routes")
	)
	app.use("/quizzes", require("./src/components/quiz/quiz.routes"))

	//#region
	app.all("*", (req, res, next) => {
		res.status(404)
		next(new Error("Route doesn't exists"))
	})

	app.use((err, req, res, next) => {
		const json = { message: err.message, errors: err.errors }
		if (process.env.MODE === "DEV") {
			json.stack = err.stack
		}
		res.status(err.statusCode || 500).json(json)
	})
	//#endregion
}
