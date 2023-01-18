const { validate } = require("../../middlewares/validate.middleware")
const { quizSchema } = require("./quiz.validate")
const {
	addQuiz,
	getQuizzes,
	updateQuiz,
	deleteQuiz,
} = require("./quiz.service")

const router = require("express").Router()

router
	.route("/")
	.post(validate(quizSchema), addQuiz)
	.get(getQuizzes)
	.put(updateQuiz)
	.delete(deleteQuiz)

module.exports = router
