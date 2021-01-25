const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/cars', (req, res) => {
  return res.json({name:'Ferrari', year:2020})
})

app.get('/users/:id', (req, res) => {
  return res.json({name:'name', email:'email@email.com', param:req.params.id})
})

app.listen(3333, () => {
  console.log('Servidor executando na porta 3333')
})