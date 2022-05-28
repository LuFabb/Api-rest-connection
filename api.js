const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
//don't show the mongo db url for privacy reasons
mongoose.connect('')

app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/id', user.destroy)

app.get('*', (req, res) => {
  res.status(404).send('this page does not exist')
})

app.listen(port, () => {
  console.log('starting the application')
})