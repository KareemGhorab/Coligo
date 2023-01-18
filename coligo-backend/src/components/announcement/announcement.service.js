const model = require("./announcement.model")
const {
	addDocument,
	getDocuments,
	deleteDocument,
	updateDocument,
} = require("../../utils/service.handler")

exports.addAnnouncement = addDocument(model)
exports.getAnnouncements = getDocuments(model)
exports.updateAnnouncement = updateDocument(model)
exports.deleteAnnouncement = deleteDocument(model)
