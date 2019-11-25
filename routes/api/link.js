const router = require('express').Router();
const linkController = require('../../controllers/linkController');

// Matches with "/api/link"
router.route('/')
    .get(linkController.getAllLinks)
    .post(linkController.createNewLink)
//=======================================================

router.route('/:id')
    .get(linkController.getLinkById)
    .delete(linkController.deleteById)
// Matches with "/api/link/task/:id"
router.route('/task/:id').get(linkController.getLinkByTaskId)
module.exports = router;