const db = require('../models/index.js');

module.exports = {
  getAllLogins: (req, res) => {
    console.log(req.isAuthenticated());
    db.LoginHistory.selectAll(data => {
      res.status(200).json(data);
    });
  },
  getLoginsByUserId: (req, res) => {
    console.log(req.isAuthenticated());
    db.LoginHistory.selectByUserId(req.params.id, data => {
      res.status(200).json(data);
    });
  },
  getLoginsBetweenDates: (req, res) => {
    console.log(req.isAuthenticated());
    db.LoginHistory.selectBetweenDates(req.body.vals, data => {
      res.status(200).json(data);
    });
  },
  logNewLogin: (req, res) => {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
      console.log(req.body.vals);
        db.LoginHistory.insertOne(req.body.vals, result => {
          res.status(200).json({ id: result.insertId });
        });
    }
    else {
      res.status(400).end();
    }
  }
};
