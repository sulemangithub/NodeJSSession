const fs = require("fs");

fs.readFile("./demo.txt",function(err,data){
    if(!err)
    {
        console.log(`async ${data.toString()} completed`);
    }
    else 
    {
        throw err;
    }
});

let data = fs.readFileSync("./demo.txt");
console.log(data.toString());
console.log("reading completed...");