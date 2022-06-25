const qnaModel = require('../qnaModel/index');

exports.askQuestion = async (req, res) => {
    try {
        await qnaModel.create(req.body);
        res.status(201).send('created');
    } catch (err) {
        console.error(err);
        res.status(404).send();
    }
}

exports.fetchAllQuestions = async(req,res)=>{
    try{
        const data=await qnaModel.find();
        res.status(200).json(data);
    }catch(err){
        console.error(err);
        res.status(404).send();
    }
}

exports.fetchQuestion = async(req,res)=>{
    const id=req.params.id;
    try{
        const data=await qnaModel.findById(id);
        res.status(200).json(data);
    }catch(err){
        console.error(err);
        res.status(404).send();
    }
}

exports.addAnswerToQuestion = async(req,res)=>{
    try{
        const questionId=req.params.questionId;
        await qnaModel.findByIdAndUpdate(questionId,{$push:{answers:req.body}})
        res.status(201).send('answer added')
    }catch(err){
        console.error(err);
        res.status(404).send();
    }
}