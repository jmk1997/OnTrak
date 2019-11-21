const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

const Task = {
    selectAll: cb =>{
        const queryString =
        "SELECT taskId, groupId, description, deadline, taskName, userId, creationDate, status FROM Tasks ORDER BY deadline ASC;"
        connection.query(queryString, (err,results) => {
            if(err) throw err;
            cb(results);
        });
    },
    insertOne: (vals, cb) => {
        const queryString =
        "INSERT INTO Tasks(taskId, groupId, description, deadline, taskName, userId, creationDate, status) VALUES(?,?,?,?,?,?,?,?)"
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
          });
    },
    updateOneByTask: (vals, id, cb) => {
        vals.push(id);
        const queryString =
          "UPDATE Tasks SET description=?, deadline=?, taskName=?, status=? WHERE taskId=?;";
        connection.execute(queryString, vals, (err, result) => {
          if (err) throw err;
          cb(result);
        });
      },
    deleteOne: (id, cb) => {
      const queryString = "DELETE FROM Tasks WHERE taskId=?;";
      connection.execute(queryString, [id], (err, result) => {
        if (err) throw err;
        cb(result);
      });
    }
}

module.exports = Task;