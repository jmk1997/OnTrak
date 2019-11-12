const db = require('../models/index.js');

module.exports = {
    getAllTasks: (req,res) => {
        console.log(req.isAuthenticated());
        db.Task.selectAll( data =>{
            res.status(200).json(data);
        })
    }
}