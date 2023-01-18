const Joi = require("joi")

exports.quizSchema = Joi.object({
	title: Joi.string().required(),
	type: Joi.string(),
	course: Joi.string().required(),
	topic: Joi.string().required(),
	date: Joi.date().required(),
})
