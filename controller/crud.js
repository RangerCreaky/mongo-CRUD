const express = require('express');
const Task = require('../modals/tasks');
const router = express.Router();

// crud operations
router.post('/add' , (req , res)=>{
    console.log(req.body);
    const title = req.body.title;
    const desc = req.body.desc;
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
    console.log(id);
    Task.findByIdAndUpdate({'_id' : id} , {$set : {status : true}} , (err)=>{
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
    let id = req.body.id;
    let title = req.body.title;
    let desc = req.body.desc;

    Task.findByIdAndUpdate({'_id' : id} , {$set : {title : title , desc : desc}} , (err)=>{
        if(err){
            console.log(err);
            // alert will be shown
        }
        else{
            res.redirect("/");
        }
    });
});

router.post('/delete' , (req , res)=>{
    console.log(req.body);
    Task.findOneAndDelete({'_id' : req.body.id} , (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    });
});


module.exports = router;