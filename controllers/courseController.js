const db = require('../models/index.js');

module.exports = {
  getAllCourses: (req, res) => {
    console.log(req.isAuthenticated());
    db.Course.selectAll(data => {
      res.status(200).json(data);
    });
  },
  getCoursesByUser: (req, res) => {
    console.log(req.isAuthenticated());
    db.Course.selectCoursesByUser(req.params.id, data => {
      res.status(200).json(data);
    });
  },
  createNewCourse: (req, res) => {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
      const courseData = req.body;
      console.log(courseData);
        db.Course.insertOne(courseData, result => {
          res.status(200).json({ id: result.insertId });
        });
    }
    else {
      res.status(400).end();
    }
  },
};
