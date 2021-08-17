const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/taskDB" , {useUnifiedTopology : true , useNewUrlParser : true , useFindAndModify : false});

const tasksSchema = new mongoose.Schema({
    title : String,
    desc : String,
    status : {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model("task" , tasksSchema);
module.exports = Task;