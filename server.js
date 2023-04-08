const express = require('express');
const path = require('path');
const htmlRoute = require('./routes/html')
const apiRoute = require('./routes/api')

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, "public")));

app.use(htmlRoute)
// app.use(apiRoute)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)            
);