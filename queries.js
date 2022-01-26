const { Pool } = require("pg")

const pool = new Pool({
    user: "me",
    host: "localhost",
    database: "housing",
    port: 5432,
    password: "password",
    // user: process.env.DBUSER,
    // host: process.env.DBHOST,
    // database: process.env.DBNAME,
    // port: process.env.DBPORT,
})

const getApartments = (req, res) => {
    pool.query("SELECT * FROM listings", (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const registerUser = async (req, res) => {
    const { fname, lname, email, password } = req.body

    const checkUser = await pool.query("SELECT * FROM users WHERE email = $1", [email])

    if (checkUser.rows.length > 0) {
        return res.status(403).json({ success: false, message: "email already in use" })
    }

    pool.query(
        "INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
        [fname, lname, email, password],
        (error, results) => {
            if (error) {
                console.log(error)
            }
            res.status(200).json(results.row)
        }
    )
}

module.exports = { getApartments, registerUser }
