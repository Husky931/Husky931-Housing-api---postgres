const express = require("express")
const dotenv = require("dotenv")

const listings = require("./routes/listings")
const db = require("./queries")

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/listings", listings)

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Homepage ok",
    })
})

app.post("/login", (req, res) => {
    // let { fname, lname, email, password } = req.body
    res.status(200).json({
        success: true,
        data: "Login user",
    })
})
app.post("/register", (req, res) => {
    // { fname, lname, email, password } = req.body

    console.log(req.body, "ds")
    res.status(200).json({
        success: "goodf",
        // data: fname, lname, email, password,
    })
})

const PORT = 5000

app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
