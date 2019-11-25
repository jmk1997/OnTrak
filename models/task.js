const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

const Task = {
    selectAll: cb =>{
        const queryString =
        "SELECT taskId, groupId, description, deadline, taskName, userId, creationDate, status FROM Tasks ORDER BY status, deadline ASC;"
        connection.query(queryString, (err,results) => {
            if(err) throw err;
            cb(results);
        });
    },
    selectByGroup: (id, cb) =>{
      const queryString =
      "SELECT taskId, groupId, description, deadline, taskName, userId, username , creationDate, status FROM Tasks t join Users k on t.userId=k.user_id WHERE groupId = ? ORDER BY status, deadline ASC;"
      connection.query(queryString, [id], (err,results) => {
          if(err) throw err;
          cb(results);
      });
    },
    selectRecentByGroup: (id, cb) =>{
      const queryString =
      "SELECT taskId, groupId, description, deadline, taskName, userId, updatedDate, status FROM Tasks WHERE groupId = ? and updatedDate>CURDATE()-5 ORDER BY updatedDate DESC LIMIT 5;"
      connection.query(queryString, [id], (err,results) => {
          if(err) throw err;
          cb(results);
      });
    },
    insertOne: (vals, cb) => {
        const queryString =
        "INSERT INTO Tasks(groupId, description, deadline, taskName, userId, updatedDate) VALUES(?,?,?,?, (SELECT u.user_id FROM Users u join UserGroupRelation ugr on ugr.user_id=u.user_id where u.username = ? and ugr.group_id = ?), CURDATE());"
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
          });
    },
    updateOneByTask: (vals, id, cb) => {
        vals.push(id);
        const queryString =
          "UPDATE Tasks SET description=?, deadline=?, taskName=?, status=?, updatedDate=CURDATE() WHERE taskId=?;";
        connection.execute(queryString, vals, (err, result) => {
          if (err) throw err;
          cb(result);
        });
      },
    markTaskAsDone: (id,cb) =>{
      const queryString = 
        "Update Tasks SET status='Done', updatedDate = CURDATE() where taskId = ?;";
        connection.execute(queryString, id, (err, result) => {
          if(err) throw err;
          cb(result);
        }
        );
    },
    markTaskAsNotDone: (id,cb) =>{
      const queryString = 
        "Update Tasks SET status='Not Done', updatedDate = CURDATE() where taskId = ?;";
        connection.execute(queryString, id, (err, result) => {
          if(err) throw err;
          cb(result);
        }
        );
    },
    getCompletionData: (id, cb) =>{
      const queryString =
      "SELECT s.username as name, count(userId) as y from Tasks t join Users s on t.userId=s.user_id where groupId = ? and status='Done' group by userId;"
      connection.query(queryString, [id], (err,results) => {
          if(err) throw err;
          cb(results);
      });
    },
    getUnCompletionData: (id, cb) =>{
      const queryString =
      "SELECT 'Not Done' as name, count(userId) as y from Tasks t join Users s on t.userId=s.user_id where groupId = ? and status='Not Done';"
      connection.query(queryString, [id], (err,results) => {
          if(err) throw err;
          cb(results);
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