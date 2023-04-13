var express = require('express');

var router = express.Router();
 var {getQuestions,getQuestion,createQuestion,updateQuestion,deleteQuestion}=require('../controllers/quiz');

 router.route('/questions').get(getQuestions);
 router.route('/question/:id').get(getQuestion);
 router.route('/createQuestion').post(createQuestion);
 router.route('/updateQuestion/:id').put(updateQuestion);
 router.route('/deleteQuestion/:id').delete(deleteQuestion);

 module.exports = router;