const db = require('../models/index.js');

module.exports = {
    getAllTasks: (req,res) => {
        console.log(req.isAuthenticated());
        db.Task.selectAll( data =>{
            res.status(200).json(data);
        })
    },
    createNewTask: (req, res) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
          const userData = req.body.vals;
            db.Task.insertOne(userData, result => {
              res.status(200).json({ id: result.insertId });
            });
        }
        else {
          res.status(400);
        }
      },
    updateTaskById: (req, res) => {
        console.log(req.isAuthenticated());
        const userData = req.body.vals; // grab onto the new user array of values
          db.task.updateOneByTask(userData, req.params.id, result => {
            if (result.changedRows === 0) {
              res.status(204).end();
            } else {
              res.status(200).end();
            }
          });
      },
}