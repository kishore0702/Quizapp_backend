var quizModel =require ('../models/models');

const getQuestions=async(req,res)=>{
    try{
        var questions =await quizModel.find()
        if(questions){
            res.json(questions)
        }
    }catch(err){
     console.log(err);
    }
}

const getQuestion=async(req,res)=>{
    try{
        var question =await quizModel.findById(req.params.id);
        if(question){
            res.json(question)
        }
    }catch(err){
    console.log(err);
    }
}

const createQuestion=async(req,res)=>{
    try{
        var newQuestion=await quizModel.create({
            question:req.body.question,
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            answer:req.body.answer
        });
        var createQuestion =newQuestion.save();
        if(createQuestion){
            res.send("question created successfully")
        }
    }catch(err){
        console.log(err);
    }
}

const updateQuestion = async(req, res) => {
    try{
        var updateQuestion= await quizModel.findByIdAndUpdate(req.params.id, req.body);
        if(updateQuestion){
            res.send("question updated successfully")
        }
    }catch(err){
        console.log(err);
    }
}

const deleteQuestion = async(req, res) => {
    try{
        var deleteQuestion= await quizModel.findByIdAndDelete(req.params.id);
        if(deleteQuestion){
            res.send("question deleted successfully")
        }
    }catch(err){
        console.log(err);
    }
}

module.exports={getQuestions,getQuestion,createQuestion,updateQuestion,deleteQuestion}