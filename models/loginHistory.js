const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

const loginHistory = {
    selectAll: cb =>{
        const queryString =
        "SELECT userId, timestamp FROM LoginHistory ORDER BY timestamp DESC;"
        connection.query(queryString, (err,results) => {
            if(err) throw err;
            cb(results);
        });
    },
    selectByUserId: (id, cb) =>{
      const queryString =
      "SELECT timestamp, FROM LoginHistory WHERE userId = ? ORDER BY timestamp DESC;"
      connection.query(queryString, [id], (err,results) => {
          if(err) throw err;
          cb(results);
      });
    },
    selectBetweenDates: (vals, cb) => {
        const queryString =
        "SELECT timestamp, userId FROM LoginHistory WHERE timestamp BETWEEN ? AND ?;"
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
          });
    },
    insertOne: (vals, cb) => {
        const queryString =
        "INSERT INTO LoginHistory (userId) VALUES(?);"
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
          });
    }
}

module.exports = loginHistory;