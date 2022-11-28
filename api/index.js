if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(process.env.PORT || 3000, () => {
    if (process.env.PORT == null) {
        console.log(`You are listening on port ${3000}...`)
    } else {
        console.log(`You are listening on port ${process.env.PORT}...`)
    }
})