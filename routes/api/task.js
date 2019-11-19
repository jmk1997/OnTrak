const router = require('express').Router();
const taskController = require('../../controllers/taskController');

// Matches with "/api/task"
router.route('/')
// GET "/api/task"
  .get(taskController.getAllTasks) //Gets all the users
  .post(taskController.createNewTask)
//=======================================================
router.route('/:id')
  .put(taskController.updateTaskById)
  .get(taskController.getTaskByGroup)

module.exports = router;