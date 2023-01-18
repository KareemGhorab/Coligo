const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
	course: {
		type: String,
		required: [true, "Title required"],
	},
	description: {
		type: String,
		required: [true, "Description required"],
	},
	user: {
		type: Types.ObjectId,
		ref: "user",
		required: true,
	},
})

const autoPopulateUser = function (next) {
	this.populate("user")
	next()
}

schema.pre("findOne", autoPopulateUser).pre("find", autoPopulateUser)

module.exports = model("announcement", schema)
