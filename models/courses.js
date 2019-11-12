const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

// Build a user Model to export to the controllers
const Course = {
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
      "SELECT course_id, course_name, course_desc FROM Courses WHERE course_id=? LIMIT 1;";
    connection.execute(queryString, [id], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  selectCoursesByUser: (user_id, cb) => {
     const queryString =
       "SELECT c.course_id, c.course_name, c.course_desc FROM UserCourseRelation ucr INNER JOIN Courses c ON c.course_id = ucr.course_id where ucr.user_id = ?;";
     connection.execute(queryString, [user_id], (err, results) => {
       if (err) throw err;
       cb(results);
     });
  },
  deleteOne: (id, cb) => {
    const queryString = "DELETE FROM Courses WHERE course_id=?;";
    connection.execute(queryString, [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (vals, cb) => {
    const queryString =
      "INSERT INTO Courses (course_name, course_desc) VALUES (?,?)";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (vals, id, cb) => {
    vals.push(id);
    const queryString =
      "UPDATE Courses SET  course_name=?, course_desc=? WHERE course_id=?;";
    connection.execute(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};
module.exports = Course;
