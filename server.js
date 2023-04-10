// The following line imports the express module from node.js
const express = require('express');

// The next two lines of code import the html.js and api.js routing files which were created by me to properly route the webpages and also the interactions with the database and api. 
const htmlRoute = require('./routes/html')
const apiRoute = require('./routes/api')

// tells the webserver what port to listen on. It means whatever is in the environment variable PORT, or (i.e. ||) 3001 if nothing else is there.   
const PORT = process.env.PORT || 3001;

// This is the traditional method for creating an express application
const app = express();

// This means that the app is to use the express.urlencoded() middleware function for parsing URL requests. Etended = true allows you to post nested objects
app.use(express.urlencoded({ extended: true}))
// app.use(express.json()) is express middleware that allows you to automatically parse JSON request bodies for you
app.use(express.json())
// The middleware function tells express where to serve statis assets (i.e. css, html, and frontend js files)
app.use(express.static('public'))

app.use(htmlRoute)
app.use(apiRoute)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)            
);