


import express from "express"
import { addtask, gettask } from "../controller/task.controller.js"
import { validateSession } from "../middleware/session.middleware.js"

const router = express.Router()

router.post('/addtask', validateSession, addtask)

router.get('/gettask', validateSession, gettask) 


export default router