const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/taskDB" , {useUnifiedTopology : true , useNewUrlParser : true});

const tasksSchema = new mongoose.Schema({
    title : String,
    desc : String,
    Status : {
        Boolean,
        default: false
    }
});

const Task = mongoose.model("task" , tasksSchema);
module.exports = Task;