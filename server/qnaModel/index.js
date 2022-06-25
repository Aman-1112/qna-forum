const mongoose = require('mongoose');

const qnaSchema= new mongoose.Schema({
    questionTitle:{
        type:String,
        required:true,
        unique:true
    },
    questionBody:{
        type:String,
        required:true
    },
    author:String,
    profession:String,
    askedAt:{
        type:Date,
        default:Date.now
    },
    answers:[{
        answer:String,
        author:String,
        profession:String,
        answeredAt:{
            type:Date,
            default:Date.now
        }
    }]
})

const qnaModel=mongoose.model('qna',qnaSchema);

module.exports=qnaModel;