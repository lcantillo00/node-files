var express= require('express');
var app=express();
const port=8080;

app.get('/',function (req,res){
    res.end('hi this is a test');
});
app.listen(port, function(){
    console.log(`listen to ${port}`);
})
