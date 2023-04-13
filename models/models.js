var mongoose = require('mongoose');
var quizSchema=new mongoose.Schema({
    question:{
        type:'string',
        required:true
    },
    option1:{
        type:'string',
        required:true
    },
    option2:{
        type:'string',
        required:true
    },
    option3:{
        type:'string',
        required:true
    },
    answer:{
        type:'string',
        required:true
    }
})

var quizModel= mongoose.model('Quiz', quizSchema);
module.exports=quizModel;