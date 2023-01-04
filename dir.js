var fs = require('fs');

if(!(fs.existsSync('ssi'))){
    fs.mkdir('ssi',function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("directory created");
        }
    });
}
if(!(fs.existsSync('indore'))){
    fs.mkdirSync('indore');
}
try{
    fs.mkdirSync('indore');
}
catch(e){
    console.log(e.message);
}
console.log("bye");
fs.rename('ssi','newssi',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("rename successfully");
    }
})