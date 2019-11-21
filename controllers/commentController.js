const db = require('../models/index.js');

module.exports = {
    getAllComments: (req,res) => {
        console.log(req.isAuthenticated());
        db.Comment.selectAll( data =>{
            res.status(200).json(data);
        })
    },
    getOneById: (req,res) => {
        console.log(req.isAuthenticated());
        console.log(req.commentData);
        db.Comment.selectOneById(req.params.id, data =>{
            res.status(200).json(data);
        })
    },
    getAllByUser: (req,res) => {
        console.log(req.isAuthenticated());
        db.Comment.selectByUser(req.params.id, data =>{
            res.status(200).json(data);
        })
    },
    getAllByTask: (req,res) => {
        console.log(req.isAuthenticated());
        db.Comment.selectByTask(req.params.id, data =>{
            res.status(200).json(data);
        })
    },
    deleteById: (req, res) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated){
            db.Comment.deleteOne(req.params.id, data =>{
                res.status(200).json(data);
            })
        }
        else {
            res.status(400).end();
        }
    },
    createNewComment: (req, res) => {
        console.log(req.isAuthenticated());
        if(true || req.isAuthenticated()){
          const commentData = req.body.vals;
          console.log(commentData);
            db.Comment.insertOne(commentData, result => {
              res.status(200).json({ id: result.insertId });
            });
        }
        else {
          res.status(400).end();
        }
      },
    updateCommentById: (req, res) => {
        console.log(req.isAuthenticated());
        const commentData = req.body.vals; 
          db.Comment.updateOne(commentData, req.params.id, result => {
            if (result.changedRows === 0) {
              res.status(204).end();
            } else {
              res.status(200).end();
            }
          });
      }
}