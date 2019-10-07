const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const keys = require('./config');
const PORT = process.env.PORT || 5000;

const app = express();

//STATIC FOLDER
app.use(express.static(path.join(__dirname,'../client/build')));

// Body Parser Middleware
app.use(bodyParser.json());

//CREATE CONNECTION
const db = mysql.createConnection({
  host     : keys.DB_HOST,
  user     : keys.DB_USER,
  password : keys.DB_PASSWORD,
  database : keys.DB_DATABASE
});

//CONNECT
db.connect( (err) => {
  if(err) throw err;
  console.log('MySQL Connected...');
});

// example query that will print out to the browser's console
db.query('SELECT * FROM Users', function (err, rows, fields){
  if (err) throw err
  console.log(rows)
})

// usage: if username and password belong to same row on user table, let them log in a display the information relevant to them
// store current user -> current group to display correct info

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})