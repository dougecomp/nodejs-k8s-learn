const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Hello!')
})

app.get('/cars', (req, res) => {
  return res.json({name:'BMW', year:2020})
})

app.get('/users', (req, res) => {
  return res.json({name:'name', email:'email@email.com'})
})

app.listen(3333, () => {
  console.log('Servidor executando na porta 3333')
})