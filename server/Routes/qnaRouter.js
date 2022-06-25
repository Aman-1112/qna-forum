const express = require('express');
const qnaRouter=express.Router();

const {askQuestion,fetchAllQuestions,fetchQuestion,addAnswerToQuestion} = require('../Controllers/qna');

qnaRouter
.post('/ask/question',askQuestion)

qnaRouter
.get('/allquestions',fetchAllQuestions)

qnaRouter
.get('/question/:id',fetchQuestion)

qnaRouter
.post('/addanswer/question/:questionId',addAnswerToQuestion)

module.exports=qnaRouter;