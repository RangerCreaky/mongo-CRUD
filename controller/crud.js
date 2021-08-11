const express = require('express');
const Task = require('../modals/tasks');
const router = express.Router();

// crud operations
router.post('/add' , (req , res)=>{
    console.log(req.body);
    const title = req.body.title;
    const desc = req.body.desc;

    console.log(title , desc);
    
    const newTask = new Task({
        title : title,
        desc : desc
    });

    newTask.save((err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('object saved');
            res.redirect('/');
        }
    })
});

router.post('/markRead' , (req , res)=>{
    console.log(req.body);
    const id = req.body.id;
    Task.updateOne({'id' : id} , {$set : {status : true}} , (err)=>{
        if(err){
            console.log(err);
            // alert will be shown
        }
        else{
            res.redirect("/");
        }
    });
});

router.post('/update' , (req , res)=>{

});

router.post('/delete' , (req , res)=>{

});


module.exports = router;