const fs = require("fs");
const http = require("http");

let server = http.createServer();

server.on("request",function(request,response){
    
    const src = fs.createReadStream("./big.file");
    src.pipe(response);

});


server.listen(5050,function(){
    console.log("server is listening on 5050 port..");
})
