var express= require('express');
var app=express();
const PORT=8080;
app.get('/',function(req,res){
    res.end('hello world LILY');
});
app.listen(PORT,function(){
    console.log(`listening on port ${PORT}`);
});
