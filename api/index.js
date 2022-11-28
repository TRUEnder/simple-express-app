if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/', (req, res) => {
    const message = {
        data: {
            message: "Success"
        }
    }
    res.status(200).json(message)
})

app.listen(process.env.PORT || 3000, () => {
    if (process.env.PORT == null) {
        console.log(`You are listening on port ${3000}...`)
    } else {
        console.log(`You are listening on port ${process.env.PORT}...`)
    }
})