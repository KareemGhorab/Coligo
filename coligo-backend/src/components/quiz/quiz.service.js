const model = require("./quiz.model")
const {
	addDocument,
	updateDocument,
    deleteDocument,
    getDocuments,
} = require("../../utils/service.handler")

exports.addQuiz = addDocument(model)
exports.updateQuiz = updateDocument(model, ["body", "id"])
exports.deleteQuiz = deleteDocument(model, ["body", "id"])
exports.getQuizzes = getDocuments(model)
