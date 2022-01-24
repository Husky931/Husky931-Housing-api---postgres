const { Pool, Client } = require("pg")

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

// pool.query("SELECT * FROM listings", (err, result) => {
//     console.log(err, result.rows)
//     pool.end()
// })

const getApartments = (req, res) => {
    pool.query("SELECT * FROM listings", (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = { getApartments }
