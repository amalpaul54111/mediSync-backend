const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI)
        console.log(`DB connected ${conn.connection.host}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }    
}

module.exports = connectDB