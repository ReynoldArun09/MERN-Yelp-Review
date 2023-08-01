const mongoose = require('mongoose')


function dbConnection() {
  try {
    mongoose.connect(process.env.MONGO_URL)
    const connection = mongoose.connection;
    connection.on('connected', () => {
        console.log('mongodb connected successfully')
    })

    connection.on('error', (err) => {
        console.log(err)
        
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnection

