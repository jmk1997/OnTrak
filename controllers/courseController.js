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
  }
};
