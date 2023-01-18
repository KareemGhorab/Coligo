const model = require("./user.model")
const jwt = require("jsonwebtoken")

const { catchAsyncError } = require("../../utils/catchAsyncError")

exports.signin = catchAsyncError(async (req, res, next) => {
	const user = await model.findOne()
	const { _id: id, image, username } = user

	jwt.sign({ id, image, username }, process.env.SECRET, (err, token) => {
		if (err) return next(err)
		res.json({ token })
	})
})
