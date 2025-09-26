


import express from "express"
import { authenticationToken } from "../middleware/auth.middleware.js";


const router = express.Router()

router.get('/', authenticationToken, (req, res) => {
    res.status(200).json({
        message: "This is a private route",
        user: req.user
    })
})


export default router;