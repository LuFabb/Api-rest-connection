const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Chanchito feliz') 
})

app.post('/', (req, res) => {
  res.status(201).send('creando chanchito')
})

app.get('/:id', (req, res) => {
  console.log(req.params)
  res.status(200).send(req.params)
})


app.put('/:id', (req, res) => {
  console.log(req.params)
  res.sendStatus(204)
})

app.patch('/:id', (req, res) => {
  res.sendStatus(204)
})

app.delete('/id', (req, res) => {
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log('starting the application')
})