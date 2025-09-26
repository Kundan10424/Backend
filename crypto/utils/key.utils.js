



import crypto from "crypto"

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
    },
})

export { publicKey, privateKey }


