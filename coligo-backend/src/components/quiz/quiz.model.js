const { Schema, model } = require("mongoose")

const schema = new Schema({
	title: {
		type: String,
		required: [true, "Title required"],
	},
	type: {
		type: String,
		enum: ["quiz", "assignment"],
		default: "quiz"
	},
	course: {
		type: String,
		required: [true, "Course required"],
	},
	topic: {
		type: String,
		required: [true, "Topic required"],
	},
	date: {
		type: Date,
		required: [true, "Date required"],
	},
})

module.exports = model("quiz", schema)
