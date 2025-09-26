 


const os = require('os')

//* 1,2. get os platform and user info
console.log("OS Platform", os.platform())
console.log("USer Info", os.userInfo())

//* 3. get the os CPU core info and arch.
console.log("CPU core info", os.cpus().length)
console.log("CPU Architechture", os.arch( ))

//* 4. get the free memory
console.log("Free Memory", os.freemem(), "bytes")



