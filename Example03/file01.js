const fs = require("fs");

/*
Very good example to show what is synchronous and asychronous file writing.
We might not see the data appended because first function may run last and 
create a new file with all new content in it.
*/

fs.writeFile("./demo.txt","This is an example of file writing12",function(err){
    
    console.log("This function itself will not get called in case of sync function");
    if(err)
    {
        throw err;
    }

    console.log("Data written to a file..");
});

fs.appendFile("./demo.txt","This is one line to existing file.",function(err){
    if(err)
        throw err;
    console.log("Data appended to a file..");
    
})


