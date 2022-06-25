const express=require('express');
const dotenv = require('dotenv');
dotenv.config({path:"./configuration.env"});
const mongoose = require('mongoose');
const app=express();

const uri=process.env.DATABASE_CONNECTION_STRING.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(uri,{useNewUrlParser:true})
.then(()=>console.log('Connected To Database'))
.catch(err=>console.error(err))

app.use(express.json());
const qnaRouter = require('./Routes/qnaRouter');
app.use('/api/v1',qnaRouter);

const Port=process.env.PORT;

app.listen('5000',(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log(`Server running at Port:${Port}`);
    }
})