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
  .post(taskController.markTaskAsNotDone)
//=======================================================
router.route('/recent/:id')
  .get(taskController.getRecentTasksByGroupId)

  router.route('/doneGraph/:id')
  .get(taskController.getTaskData)

  router.route('/notDoneGraph/:id')
  .get(taskController.getUnCompletionData)

module.exports = router;