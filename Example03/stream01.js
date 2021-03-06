const fs = require("fs");

const file = fs.createWriteStream("./big.file");

for(let i=0;i<1e3;i++)
{
    file.write(`Both Writable and Readable streams will store data in an internal buffer that can be retrieved using writable.writableBuffer or readable.readableBuffer, respectively.

    The amount of data potentially buffered depends on the highWaterMark option passed into the stream's constructor. For normal streams, the highWaterMark option specifies a total number of bytes. For streams operating in object mode, the highWaterMark specifies a total number of objects.
    
    Data is buffered in Readable streams when the implementation calls stream.push(chunk). If the consumer of the Stream does not call stream.read(), the data will sit in the internal queue until it is consumed.
    
    Once the total size of the internal read buffer reaches the threshold specified by highWaterMark, the stream will temporarily stop reading data from the underlying resource until the data currently buffered can be consumed (that is, the stream will stop calling the internal readable._read() method that is used to fill the read buffer).
    
    Data is buffered in Writable streams when the writable.write(chunk) method is called repeatedly. While the total size of the internal write buffer is below the threshold set by highWaterMark, calls to writable.write() will return true. Once the size of the internal buffer reaches or exceeds the highWaterMark, false will be returned.`);
}

file.end();