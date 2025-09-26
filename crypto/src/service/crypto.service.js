
import crypto from "crypto"


export const encrypt = (publicKey, message) => {
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message))

    return encrypted.toString("base64")
}

export const decrypt = (privateKey, message) => {
    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(message, "base64"))

    return decrypted.toString("utf-8")
}