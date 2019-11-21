const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

// Build a comment Model to export to the controllers
const Comment = {
  selectAll: (cb) => {
    const queryString =
      "SELECT commentId, taskId, userId, creationDate, text, score FROM Comments ORDER BY commentId ASC;";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectOneById: (id, cb) => {
    const queryString =
      "SELECT commentId, taskId, userId, creationDate, text, score FROM Comments WHERE commentId=? LIMIT 1;";
    connection.execute(queryString, [id], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectByUser: (user_id, cb) => {
     const queryString =
       "SELECT c.commentId, c.creationDate, c.text, c.score FROM Comments c where userId = ?;";
     connection.execute(queryString, [user_id], (err, results) => {
       if (err) throw err;
       cb(results);
     });
  },
  selectByTask: (taskId, cb) => {
      const queryString =
        "SELECT commentId, taskId, userId, creationDate, text, score FROM Comments WHERE commentId=? LIMIT 1;";
      connection.execute(queryString, [taskId], (err, results) => {
        if (err) throw err;
        cb(results);
      });
  },
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM Comments WHERE commentId=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (vals, cb) => {
    const queryString =
      "INSERT INTO Comments (taskId, userId, text, score) VALUES (?,?,?,?)";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (vals, id, cb) => {
    vals.push(id);
    const queryString =
      "UPDATE Comments SET taskId=?, userId=?, text=?, score=? WHERE commentId=?;";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};
module.exports = Comment;
