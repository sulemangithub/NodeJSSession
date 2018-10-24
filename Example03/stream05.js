const fs = require("fs");

const reader = fs.createReadStream("./big.file");

reader.on("data",chunk=>{
    console.log(chunk.toString());
});

reader.on("end",()=>{
    console.log("data finished...");
})