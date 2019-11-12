const router = require('express').Router();
const courseController = require('../../controllers/courseController');

// Matches with "/api/user"
router.route('/')
// GET "/api/user"
  .get(courseController.getAllCourses) //Gets all the users
//=======================================================

// Matches with "/api/course/:id"
router.route('/:id')
// GET "/api/user/:id"
  .get(courseController.getCoursesByUser)// get user data by ID

module.exports = router;