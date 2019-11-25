const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

// Build a user Model to export to the controllers
const User = {
  selectAll: cb => {
    const queryString =
      "SELECT user_id, username, access_id, type FROM Users ORDER BY user_id ASC;";
    connection.query(queryString, (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  getUserByUsernameWithPassword: (username, done) => {
    const queryString =
      "SELECT user_id, username,password, access_id, type FROM Users WHERE username=? LIMIT 1;";
    connection.execute(queryString, [username], (err, user) => {
      if (err) {
        return done(err, user);
      }
      return done(null, user[0]);
    });
  },
  getUserById: (id, done) => {
    const queryString =
      "SELECT user_id, username, access_id, type FROM Users WHERE user_id=? LIMIT 1;";
    connection.execute(queryString, [id], (err, user) => {
      if (err) {
        return done(err, user);
      }
      return done(null, user[0]);
    });
  },
  selectOneById: (id, cb) => {
    const queryString =
      "SELECT user_id, username, access_id, type FROM Users WHERE user_id=? LIMIT 1;";
    connection.execute(queryString, [id], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectOneByUsername: (username, cb) => {
    const queryString =
      "SELECT user_id, username, access_id, type FROM Users WHERE username=? LIMIT 1;";
    connection.execute(queryString, [username], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectAllByGroup: (group, cb) => {
    const queryString =
      "SELECT username, ugr.user_id FROM UserGroupRelation ugr join Users u on ugr.user_id=u.user_id where group_id=?;";
    connection.execute(queryString, [group], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM Users WHERE user_id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (vals, cb) => {
    const queryString =
      "INSERT INTO Users (username, password, access_id, user_id, type) VALUES (?,?,?,?,?)";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (vals, id, cb) => {
    vals.push(id);
    const queryString =
      "UPDATE Users SET username=?, password=?, access_id=? WHERE user_id=?;";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};
module.exports = User;
