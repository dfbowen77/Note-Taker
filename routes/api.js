// creates a new router object called apiNotes.
const apiNotes = require('express').Router()
// imports the node.js fs module for interacting with the file system 
const fs = require('fs')
// imports the randomUUID method from the crypto node.js package in order to make a unique id for each note entry.
const { randomUUID } = require('crypto')

// This function reads and returns all the notes that are saved in the db.json file. 
apiNotes.get('/api/notes', async (req, res) => {
    const data = await JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    res.json(data)
})

// This function adds new Notes to the db.json file including adding in a randomUUID
apiNotes.post('/api/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: randomUUID(),
      };
      data.push(newNote)

      fs.writeFileSync('./db/db.json',JSON.stringify(data))

      res.json(data)
})

// This function deletes a note from the db.json file. 
apiNotes.delete('/api/notes/:id', (req, res) => {
    const deleteId = req.params.id.toString()

    const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))

    const updatedData = data.filter( note => note.id.toString() !== deleteId)

    fs.writeFileSync('./db/db.json', JSON.stringify(updatedData))

    res.json(updatedData)
})

module.exports = apiNotes