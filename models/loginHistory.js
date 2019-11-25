const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

const loginHistory = {
    selectAll: cb =>{
        const queryString =
        "SELECT loginHistoryId, userId, loginDatetime FROM LoginHistory ORDER BY loginDatetime DESC;"
        connection.query(queryString, (err,results) => {
            if(err) throw err;
            cb(results);
        });
    },
    selectByUserId: (id, cb) =>{
      const queryString =
      "SELECT loginHistoryId, userId, loginDatetime, FROM LoginHistory WHERE userId = ? ORDER BY loginDatetime DESC;"
      connection.query(queryString, [id], (err,results) => {
          if(err) throw err;
          cb(results);
      });
    },
    selectBetweenDates: (vals, cb) => {
        const queryString =
        "SELECT loginHistoryId, userId, loginDatetime FROM LoginHistory WHERE loginDatetime BETWEEN ? AND ?;"
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