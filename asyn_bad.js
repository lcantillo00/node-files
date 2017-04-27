var fs=require('fs');
var file;
var buf=new Buffer(10000);
fs.open(
    'info.txt','r', function(err,handle){
        file=handle;
    }
)
fs.read(
    file,buf,0,10000,null,
    function(err,length){
        console.log(buf.toString());
        fs.close(file,function(){/*dont care*/});
    }
);
