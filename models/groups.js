const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

// Build a user Model to export to the controllers
const Group = {
  // getUserByUsernameWithPassword: (username, done) => {
  //   const queryString =
  //     "SELECT user_id, username, password, access_id, type FROM Users WHERE username=? LIMIT 1;";
  //   connection.execute(queryString, [username], (err, user) => {
  //     if (err) {
  //       return done(err, user);
  //     }
  //     return done(null, user[0]);
  //   });
  // },
  selectAll: cb => {
    const queryString =
      "SELECT user_id, username, access_id, type FROM Users ORDER BY user_id ASC;";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectOneById: (id, cb) => {
    const queryString =
      "SELECT group_id, group_title, group_desc FROM Groups WHERE group_id=? LIMIT 1;";
    connection.execute(queryString, [id], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectGroupsByUser: (user_id, cb) => {
     const queryString =
       "SELECT g.group_id, g.group_title, g.group_desc FROM UserGroupRelation ugr INNER JOIN Groups g ON g.group_id = ugr.group_id where ugr.user_id = ?;";
     connection.execute(queryString, [user_id], (err, results) => {
       if (err) throw err;
       cb(results);
     });
  },
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM Groups WHERE group_id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (vals, cb) => {
    const queryString =
      "INSERT INTO Groups (group_title, group_desc) VALUES (?,?)";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (vals, id, cb) => {
    vals.push(id);
    const queryString =
      "UPDATE Groups SET  group_title=?, group_desc=? WHERE group_id=?;";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};
module.exports = Group;
