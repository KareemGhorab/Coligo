const Joi = require("joi")

exports.announcementSchema = Joi.object({
	course: Joi.string().required(),
	description: Joi.string().required(),
	user: Joi.string().required(),
})
