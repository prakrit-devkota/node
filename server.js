const express=require('express')
app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/newdb').then(()=>{
    console.log("mongodbconnected")
})
app.set('view engline','ejs');
app.use(express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true})); 
const router=require('./router');

app.use('/',router);
app.listen(3000,()=>{
    console.log("server has been connected")
})


