const router = require('express').Router();
const commentController = require('../../controllers/commentController');

// Matches with "/api/comment"
router.route('/')
// GET "/api/task"
  .get(commentController.getAllComments) //Gets all
  .post(commentController.createNewComment)
//=======================================================
// Matches with "/api/comment/:id"
router.route('/:id')
    .get(commentController.getOneById)
  .put(commentController.updateCommentById)
  .delete(commentController.deleteById)

  // Matches with "/api/comment/task/:id"
router.route('/task/:id')
    .get(commentController.getAllByTask)

// Matches with "/api/comment/user/:id"
router.route('/user/:id')
    .get(commentController.getAllByUser)
module.exports = router;