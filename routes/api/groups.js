const router = require('express').Router();
const groupController = require('../../controllers/groupController');

// Matches with "/api/user"
router.route('/')
// GET "/api/user"
  .get(groupController.getAllGroups) //Gets all the users
//=======================================================

// Matches with "/api/group/:id"
router.route('/:id')
// GET "/api/user/:id"
  .get(groupController.getGroupsByUser)// get user data by ID
  .post(groupController.getGroupInfo)

router.route('/course/:id')
// GET "/api/user/:id"
  .get(groupController.getGroupsByCourse)// get user data by ID

module.exports = router;