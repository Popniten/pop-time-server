const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

// Set up API.
app.use('/api', require('./src/routes/home'))

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
app.listen(PORT)
console.log('API is running on port ' + PORT)
