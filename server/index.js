const express          = require('express')
const path             = require('path')
const morgan           = require('morgan')
const bodyParser       = require('body-parser')
const loginRoutes      = require('./routes/login')
const { URLS, config } = require('./constants')
//
const app = express()
const port = process.env.PORT || config.PORT
//
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// API calls
app.use(URLS.LOGIN, loginRoutes)
//
app.listen(port, () => console.log(`Listening on port ${port}`))
