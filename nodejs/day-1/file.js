



const fs = require("fs")
const os = require("os")

console.log(os.cpus().length)

//* writting files

//? fs.writeFileSync("./text.txt", "Hello world this is sync writing")

//? fs.writeFile("./test.txt", 'hello world this is async writting' , (error) => {
//     console.log(error)
// })

//* reading file

//? const res = fs.readFileSync("./text.txt", "utf8")
// console.log(res)

//? fs.readFile("./test.txt", "utf-8", (error, response) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(response)
//     }
// })

//* Updating/appending file

//? fs.appendFileSync("./text.txt", new Date().toDateString())

fs.appendFile("./test.txt", new Date().toDateString(), (err, res) => {
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})
