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
  .delete(taskController.deleteById)
  .get(taskController.getTaskByGroupId)
  .post(taskController.markTaskAsDone)
//=======================================================
router.route('/recent/:id')
  .get(taskController.getRecentTasksByGroupId)

  router.route('/graph/users')
  .get(taskController.getTesting)

module.exports = router;