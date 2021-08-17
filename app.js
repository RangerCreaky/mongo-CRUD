const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./controller/crud');
const Task = require('./modals/tasks');
const app = express();

// MIDDLEWARES
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , 'public')));

// views directory
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));


// Routes
app.use('/crud' , router);
app.get('/' , (req , res)=>{
    Task.find((err , data)=>{
        if(err){
            console.log(err);
        }
        if(data){
            // console.log(data);
            res.render('index' , {data : data});  
        }
    }); 
});

app.get("/tasks/:id" , (req , res)=>{
    // Here show the task as a whole
    const id = req.params.id;
    Task.find({'_id' : id} , (err , data)=>{
        if(err){
            console.log(err);
        }
        if(data){
            res.render('task' , {data : data});
        }
    })

    
});

// Listen
app.listen(3000 , ()=>{
    console.log('server up and running on port 3000');
});