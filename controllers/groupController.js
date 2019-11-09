const db = require('../models/index.js');

module.exports = {
  getAllGroups: (req, res) => {
    console.log(req.isAuthenticated());
    db.Group.selectAll(data => {
      res.status(200).json(data);
    });
  },
  getGroupsByUser: (req, res) => {
    console.log(req.isAuthenticated());
    db.Group.selectGroupsByUser(req.params.id, data => {
      res.status(200).json(data);
    });
  }
};
