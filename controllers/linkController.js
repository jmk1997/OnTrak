const db = require('../models/index.js');

module.exports = {
    getAllLinks: (req,res) => {
        console.log(req.isAuthenticated());
        db.Link.selectAll( data =>{
            res.status(200).json(data);
        })
    },
    getLinkById: (req, res) => {
        console.log(req.isAuthenticated());
        db.Link.selectById(req.params.id, data =>{
            res.status(200).json(data);
        })
    },
    getLinkByTaskId: (req,res) => {
        console.log(req.isAuthenticated());
        db.Link.selectBytaskId(req.params.id, data =>{
            res.status(200).json(data);
        })
    },
    createNewLink: (req, res) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
          const linkData = req.body.vals;
          console.log(linkData);
            db.Link.insertOne(linkData, result => {
              res.status(200).json({ id: result.insertId });
            });
        }
        else {
          res.status(400).end();
        }
      },
    deleteById: (req, res) => {
    console.log(req.isAuthenticated());
    if(req.isAuthenticated){
        db.Link.deleteById(req.params.id, data =>{
            res.status(200).json(data);
        })
    }
    else {
        res.status(400).end();
    }
    }
}