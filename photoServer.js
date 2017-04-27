var http= require('http');
var fs=require('fs');
const PORT= 8080;
function load_album_list(callback){
    fs.readdir(
        'albums',(err,files)=>{
            if(err){
                callback(err);
                return;
            }
            callback(null,files);
        }
    );

}
function handle_incomingrequest(req,res){
    console.log('incoming request'+ req.method+ ''+req.url);
    load_album_list((err,albums)=>{
        if(err){
            res.writeHead(500,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(err)+'\n');
        return;
        }
        var out={error:null,data:{albums:albums}};
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(out)+ "\n");
    });
}

var server=http.createServer(handle_incomingrequest);
server.listen(PORT,()=>{
    console.log("listening on http://localhost: "+ PORT);
});
