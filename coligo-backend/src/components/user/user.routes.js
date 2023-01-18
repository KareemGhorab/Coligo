const { signin } = require("./user.service")

const router = require("express").Router()

router.post("/signin", signin)

module.exports = router
