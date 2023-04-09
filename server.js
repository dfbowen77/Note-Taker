const express = require('express');
const path = require('path');
const htmlRoute = require('./routes/html')
const apiRoute = require('./routes/api')

const PORT = process.env.PORT || 3001;

const app = express();

// EXPLAIN!
app.use(express.urlencoded({ extended: true}))
// app.use(express.json()) is how you tell Express to automatically parse JSON request bodies for you
app.use(express.json())
app.use(express.static('public'))

app.use(htmlRoute)
app.use(apiRoute)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)            
);