var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var x = 10;
    var y = 20; 
    if(req.url == '/home'){
        var data = fs.readFileSync('first.html');
        res.write(data);
    }
    res.write("Home page");
    res.end();
});
server.listen(3000);