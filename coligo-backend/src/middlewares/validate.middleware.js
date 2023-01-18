const { catchAsyncError } = require("../utils/catchAsyncError")
const { AppError } = require("../utils/appError")

exports.validate = (schema, fieldToValidate = "body") =>
	catchAsyncError(async (req, res, next) => {
		const data = schema.validate(req[fieldToValidate], { abortEarly: false })
		if (data.error) {
			const errors = data.error.details.reduce((acc, detail) => ({...acc, [detail.context.label]: detail.message}), {})
			return next(new AppError("Validation error", 400, errors))
		}
		next()
	})
