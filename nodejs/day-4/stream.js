


const {Readable, Writable} = require("stream")

const readableStream = new Readable(
    {
        highWaterMark:6,
        read(){},
    }
)

const writableableStream = new Writable(
    {
        write(streamData){
            console.log("Writting:", streamData.toString())
        }
    }
)

readableStream.on("data", (chunk)=>{
    console.log("CHUNK:", chunk.toString())
    writableableStream.write(chunk)

})

console.log(readableStream.push("Hello"))