const apiNotes = require('express').Router()
const fs = require('fs')
const { randomUUID } = require('crypto')

console.log(randomUUID())

apiNotes.get('/api/notes', async (req, res) => {
    const data = await JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    console.log(JSON.stringify(data))
    res.json(data)
})

apiNotes.post('/api/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: randomUUID(),
      };
      data.push(newNote)
      console.log(data)
      console.log(newNote)
      fs.writeFileSync('./db/db.json',JSON.stringify(data))
      console.log(JSON.stringify(data))
      res.json(data)
})

module.exports = apiNotes