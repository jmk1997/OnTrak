const connection = require("../config/connection"); // import the connection from the config to the database to make db queries

const Task = {
    selectAll: cb =>{
        const queryString =
        "SELECT taskId, groupId, description, deadline, taskName, userId, creationDatetime FROM Tasks ORDER BY deadline ASC;"
        connection.query(queryString, (err,results) => {
            if(err) throw err;
            cb(results);
        });

    }
    //More statements here...
}

module.exports = Task;