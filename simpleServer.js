var http= require('http');
const PORT= 8080;
function handle_incomingrequest(req,res){
    console.log('incoming request:' + req.method +' '+ req.url);
    res.writeHead(200,{'Content_Type': 'application/json'});
    res.end(JSON.stringify({error:null, name: "lilianne", lastname: "Cantillo"})+ '\n');

}

var server= http.createServer(handle_incomingrequest);
server.listen(PORT,()=>{
    console.log("listening on http://localhost: "+ PORT);
});
