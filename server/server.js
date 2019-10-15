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
//app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

//Following https://www.youtube.com/watch?v=HPIjjFGYSJ4 guide:

app.get('/db/add', (req, res) =>{
  //TODO: Query checking.
  const {TaskName, TaskDesc} = req.query;
  const INSERT_TASK_QUERY = `INSERT into TEMPTasks (TaskName, TaskDesc, CreateDate) VALUES('${TaskName}', '${TaskDesc}', CURDATE())`;
  db.query(INSERT_TASK_QUERY, (err, results)=>{
    if(err){
      return res.send(err)
    }
    else{
      return res.send('succesfully added product')
    }

  })
});

app.get('/db', (req, res) => {
  db.query('SELECT * FROM TEMPTasks', (err, results) =>{
    if(err){
      return res.send(err)
    }
    else{
      return res.json({
        data: results
      })
    }
  });
});

// usage: if username and password belong to same row on user table, let them log in a display the information relevant to them
// store current user -> current group to display correct info

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})