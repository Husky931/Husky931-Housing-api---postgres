const express = require("express")
const dotenv = require("dotenv")

const listings = require("./routes/listings")

dotenv.config()

const app = express()

app.use("/listings", listings)

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Homepage ok",
    })
})

app.post("/login", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Login user",
    })
})
app.post("/register", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Login user",
    })
})

const PORT = 5000

app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
