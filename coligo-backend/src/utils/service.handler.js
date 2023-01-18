const { catchAsyncError } = require("./catchAsyncError")
const { ApiFeature } = require("../utils/apiFeature")
const { AppError } = require("./appError")

exports.addDocument = (model) =>
	catchAsyncError(async (req, res, next) => {
		const doc = new model(req.body)
		await doc.save()
		res.status(201).json({ message: "Document added successfully" })
	})

exports.getDocument = (model, idLocation = ["body", "id"]) =>
	catchAsyncError(async (req, res, next) => {
		const [key, value] = idLocation
		if (value === "id") value = "_id"

		const doc = await model.findOne({ [value]: req[key][value] })

		if (!doc) return next(new AppError("No document found", 404))

		res.status(200).json({
			message: "Document found successfully",
			document: doc,
		})
	})

exports.updateDocument = (model, idLocation = ["body", "id"]) =>
	catchAsyncError(async (req, res, next) => {
		const [key, value] = idLocation
		if (value === "id") value = "_id"

		const doc = await model.findOneAndUpdate(
			{ [value]: req[key][value] },
			req.body
		)

		if (!doc) return next(new AppError("No document found", 404))

		res.status(200).json({
			message: "Document updated successfully",
		})
	})

exports.deleteDocument = (model, idLocation = ["body", "id"]) =>
	catchAsyncError(async (req, res, next) => {
		const [key, value] = idLocation
		if (value === "id") value = "_id"

		const doc = await model.findOneAndDelete({ [value]: req[key][value] })

		if (!doc) return next(new AppError("No document found", 404))

		res.status(200).json({
			message: "Document deleted successfully",
		})
	})

exports.getDocuments = (model, ...fieldNamesToSearch) =>
	catchAsyncError(async (req, res, next) => {
		const findQuery = model.find()
		const apiFeature = new ApiFeature(findQuery, req.query)
			.filter()
			.search(fieldNamesToSearch)
			.paginate()
			.sort()
			.selectFields()

		const documents = await apiFeature.findQuery

		res.status(200).json({
			message: "Documents found successfully",
			page: apiFeature.page,
			documents,
		})
	})
