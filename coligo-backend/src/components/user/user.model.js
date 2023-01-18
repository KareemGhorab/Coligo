const { Schema, model } = require("mongoose")

const schema = new Schema({
	username: {
		type: String,
		required: [true, "Username required"],
	},
	image: {
		type: String,
		default: "https://img.icons8.com/color/96/null/school-building.png",
	},
})

module.exports = model("user", schema)
