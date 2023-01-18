const { validate } = require("../../middlewares/validate.middleware")
const { announcementSchema } = require("./announcement.validate")
const {
	addAnnouncement,
	updateAnnouncement,
	deleteAnnouncement,
	getAnnouncements,
} = require("./announcement.service")

const router = require("express").Router()

router
	.route("/")
	.post(validate(announcementSchema), addAnnouncement)
	.get(getAnnouncements)
	.put(updateAnnouncement)
	.delete(deleteAnnouncement)

module.exports = router
