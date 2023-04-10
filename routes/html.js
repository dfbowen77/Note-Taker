// creates a new router object called html. 
const html = require('express').Router();
// path is a node.js module that provides a way of working with directories and file paths.
const path = require('path');

// This function sends the user to the index.html file when they go to the root path. In this case, the '/' simply refers to the default that was set in server.js.
html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// This function sends the user to the notes.html file when they visit the '/notes' page. 
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// exports the html router object so that it is available in other files. 
module.exports = html