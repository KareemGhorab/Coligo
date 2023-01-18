const mongoose = require("mongoose")

mongoose.set("strictQuery", true)

module.exports = mongoose
	.connect(process.env.CON)
	.then(() => console.log("Connected to DB..."))
