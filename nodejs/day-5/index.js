


const crypto = require("crypto")

//* 1. Random bytes

const randomValues = crypto.randomBytes(8)

console.log(randomValues)

//* Create Hash

const input = "Kundan"

const hashValue = crypto.createHash('sha256').update(input).digest("hex")
console.log(hashValue)