


const http = require('http')
const fs = require('fs')
const {Transform} = require('stream')
const PORT = 5000

const server = http.createServer((req, res)=>{

    

//?-------1-------

//! Downloading big data using bad way❌.
    // const file = fs.readFileSync("sample.txt")
    // res.end(file)

//* Downloading big data in a good way(stream)✅.
    // const readableStream = fs.createReadStream('sample.txt')
    // readableStream.pipe(res)

//?-------2-------

//! Copying big data in a bad way❌.
    // const file = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt", file)
    // res.end("Hello from server")

//* Copying big data in a good way(stream)✅.
    // const readStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")

    // readStream.on("data", (chunk)=>{
    //     console.log("CHUNK:" ,chunk)
    //     writeStream.write(chunk)
    // })

    // res.end("Hello from server!")


//?-------3------- String Processing



//* converting lower case to Uppercase
//* consverting the word "Ipsum" to "Kundan"

    const readStream = fs.createReadStream("sample.txt")
    const writeStream = fs.createWriteStream("output.txt")
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "KUNDAN")
            callback(null, modifiedWord)

        }
    })
 
    //! String processing data in a bad way❌.

    // readStream.on("data", (chunk)=>{
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "KUNDAN")
    //     writeStream.write(modifiedWord)
    // })

//* String processing data in a good way(stream)✅.

    readStream.pipe(transformStream).pipe(writeStream)
    res.end("Hello from Server!")


})

server.listen(PORT,()=>{
    console.log(`Server is working✅ on ${PORT}`)
})