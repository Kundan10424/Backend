



import { encrypt, decrypt } from "../service/crypto.service.js";
import { publicKey, privateKey } from "../../utils/key.utils.js";

export const encryption = (req, res) => {

    const { message } = req.body
    
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }
    const encryptedData = encrypt(publicKey, message)

    res.json({ encryptedData }) 
}

export const decryption = (req, res) => {
    // Decryption logic will go here
    const { message } = req.body
    if (!message) {
        return res.status(400).json({ error: "Encrypted data is required" });
    }
    const decryptedData = decrypt(privateKey, message)

    res.json({ decryptedData })
}