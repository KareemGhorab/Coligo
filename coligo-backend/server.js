//#region
process.on("uncaughtException", (err) => console.log(err))

require("dotenv").config()
require("./src/db/dbCon")
const express = require("express")
const morgan = require("morgan")

const port = process.env.PORT || 3001
const app = express()
//#endregion

//#region
app.use(require("cors")())
app.use(express.json())
app.use(express.static("public"))
//#endregion
app.use(morgan("dev"))

require("./server.routes")(app)

//#region
app.listen(port, () => console.log("Server Listening..."))

process.on("unhandledRejection", (err) => console.log(err))

//#endregion
