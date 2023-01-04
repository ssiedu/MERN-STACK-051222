var fs  = require('fs')


fs.readFile('first.js',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(""+data);
    }
})

var x = fs.readFileSync('first.js');
console.log(""+x);