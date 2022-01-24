const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Receive array of all apartment",
    })
})

router.get("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: req.params.id,
    })
})

router.post("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Create new apartment",
    })
})

router.put("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        number: req.params.id,
        data: "Update apartment",
    })
})

router.delete("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        number: req.params.id,
        data: "Delete this apartment",
    })
})

module.exports = router
