require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const RestRoute = require('./routes/RestRoutes')
const dbConnection = require('./config/MongoConnect')
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use('/api/v1', RestRoute)
const port = process.env.PORT || 3001



app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
    dbConnection()
})
