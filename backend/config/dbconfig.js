const mongoose = require("mongoose")

const dbconfig = async () => {
    const URL = process.env.MONGODB_URL
    const DB = process.env.MONGODB_DB
    try {
        const db = await mongoose.connect(URL + DB)
        console.log(`DB connected - ${DB}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconfig;