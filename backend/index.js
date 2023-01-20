const connectToMongo = require('./db')
const express = require('express')
connectToMongo();

const app = express()
const port = 27017


// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Harry!')
})
app.get('/api/v1/login', (req, res) => {
  res.send('Hello Login!')
})
app.get('/api/v1/signup', (req, res) => {
  res.send('Hello SignUp!')
})

// available routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
