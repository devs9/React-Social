const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const loginRoutes = require('./routes/login')
const { URLS, config } = require('./constants')
//
const app = express()
const port = process.env.PORT || config.PORT
//
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
})
app.use(URLS.LOGIN, loginRoutes)
//
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
//
app.listen(port, () => console.log(`Listening on port ${port}`))
