var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/routes');
const { default: mongoose } = require('mongoose');

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);


var PORT=process.env.PORT ||8081;
const URI="mongodb://venkatkishore0702:q2cjkCC9heAcYKCv@ac-ynat4oc-shard-00-00.0nn8wkl.mongodb.net:27017,ac-ynat4oc-shard-00-01.0nn8wkl.mongodb.net:27017,ac-ynat4oc-shard-00-02.0nn8wkl.mongodb.net:27017/?ssl=true&replicaSet=atlas-u9l2id-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(URI).then(()=>{
    try{
        app.listen(PORT,()=>{
        console.log("MongoDB connected successfully")
        });
    }catch(err){
        console.log(err);
    }
})


// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });
