var express=require('express');
var app= express();
var PORT=3000;
var jsonData={count:12,message:'hey'};

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html',function(err){
        if(err){
            res.status(500).send(err);
        }
    });

});

app.get('/data',function(req,res){
    res.json(jsonData);
});
app.listen(PORT, function(){
    console.log(`listeninG ${PORT}`);
})
