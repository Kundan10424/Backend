



import express from "express"
import { encryption, decryption } from "../controller/crypto.controller.js"

const router = express.Router()


router.post('/encrypt', encryption)
router.post('/decrypt', decryption)

export default router;