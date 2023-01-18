const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
	username: {
		type: String,
		required: [true, "Username required"],
	},
	image: {
		type: String,
		default: "account1.png",
	},
})

schema.post("init", (doc) => {
	doc.image = `${process.env.DOMAIN}/${doc.image}`
})

module.exports = model("user", schema)
