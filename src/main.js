const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Set up API.
app.use('/time', require('./routes/time'))

// Custom 404 page.
app.use((req, res) => {
  res.status(404)
  res.json({message: '404, API not found.'})
})

// Custom 500 page.
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
  res.json({message: '500, server is burning!'})
  next()
})

// Start it up!
app.listen(config.env.PORT)
console.log('API is running on port ' + config.env.PORT)
