


const path = require("path")

console.log("Filename:",__filename)
console.log("Dirname:", __dirname)

//* School management system
//* folders/students/data.txt

const filepath = path.join("folders", "students", "data.txt")
console.log(filepath)

const parsedDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({
    "Parsed data path" : parsedDataPath,
    "resolved Path" : resolvedPath,
    "Extension Name" : extname,
    "Base Name" : basename,
    "Dir Name" : dirname
})