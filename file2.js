var fs = require('fs');

fs.writeFile("hello.txt","Hello World",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
    }
})

fs.writeFileSync("hi.txt","Hello World");