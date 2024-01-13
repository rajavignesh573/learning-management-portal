require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const dbconfig = require('./config/dbconfig')

dbconfig()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the site !")
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})