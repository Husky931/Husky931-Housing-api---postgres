const express = require("express")
const router = express.Router()

const db = require("../queries")

router.post("/", db.checkLogin)

module.exports = router
