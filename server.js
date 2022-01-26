const express = require("express")
const dotenv = require("dotenv")

const listings = require("./routes/listings")
const register = require("./routes/register")
const login = require("./routes/login")
const db = require("./queries")

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Homepage ok",
    })
})
app.use("/listings", listings)
app.use("/register", register)
app.use("/login", login)

const PORT = 5000

app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
