require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

//use to listen on port 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//listen port on 3000/login
app.get('/login', (req, res) => {
    res.send('<h1>please login in this</h1>')
})

//to get in production we need to change port to process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})