const router = require('express').Router();
const loginHistoryController = require('../../controllers/loginHistoryController');

// Matches with "/api/loginHistory"
router.route('/').get(loginHistoryController.getAllLogins).post(loginHistoryController.logNewLogin)
//=======================================================
// Matches with "/api/loginHistory/user/:id"
router.route('/user/:id').get(loginHistoryController.getLoginsByUserId)
router.route('/dates').get(loginHistoryController.getLoginsBetweenDates)
module.exports = router;