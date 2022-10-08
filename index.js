const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT));