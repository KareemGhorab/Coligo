exports.AppError = class AppError extends Error {
	constructor(message, statusCode = 500, errJson) {
		super(message)
		this.statusCode = statusCode
		this.errors = errJson
	}
}
