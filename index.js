const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()

server.listen(3001)
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))

const contacts = [
    { "name": "Marcelo" }, 
    { "name": "Maria" },
    { "name": "João" },
    { "name": "Fulano" },
]

server.get('/', () => {
    console.log('executando a rota com o GET + nodemon atualizando')
})

// List
server.get('/contact', (req, res) => {
    return res.json(contacts)
})

// Adiciona
server.post('/contact', (req, res) => {
    const { name } = req.body
    contacts.push({ "name": name })
    return res.json(contacts)
})

// Atualiza
server.put('/contact/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    contacts[index] = { "name": name }

    return res.json(contacts)
})

// Deleta
server.delete('/contact/:index', (req, res) => {
    const { index } = req.params
    contacts.splice(index,1)
    return res.json(contacts)
})