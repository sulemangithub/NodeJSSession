const fs = require("fs");

const writer = fs.createWriteStream("./stream.txt");
writer.write("Hello\n");
writer.write("Moon\n");
writer.end("end data");

console.log("data is written chunk by chunk into the file system.");