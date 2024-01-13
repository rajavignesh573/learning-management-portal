require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get("/api", (req, res) => {
    res.json("hello !")
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})