const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: 'Express app is running!'})
})

app.use('/api', router)

app.listen(PORT)
console.log('API is running on port ' + PORT)
