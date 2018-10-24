const fs = require("fs");

const reader = fs.createReadStream("./big.file");

reader.pipe(process.stdout);

