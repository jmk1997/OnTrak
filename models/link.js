const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

const loginHistory = {
    selectAll: cb =>{
        const queryString =
        "SELECT linkId, taskId, displayText, link FROM Links;"
        connection.query(queryString, (err,results) => {
            if(err) throw err;
            cb(results);
        });
    },
    selectBytaskId: (taskId, cb) =>{
      const queryString =
      "SELECT linkId, displayText, link FROM Links WHERE taskId = ?;"
      connection.query(queryString, [taskId], (err,results) => {
          if(err) throw err;
          cb(results);
      });
    },
    selectById: (id, cb) => {
        const queryString =
        "SELECT linkId, displayText, link FROM Links WHERE taskId = ?;"
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result);
          });
    },
    insertOne: (vals, cb) => {
        const queryString =
        "INSERT INTO Links (taskId, displayText, link) VALUES(?, ?, ?);"
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
          });
    },
    deleteById: (id, cb) => {
        const queryString =
        "DELETE FROM Links WHERE linkId = ?;"
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = loginHistory;