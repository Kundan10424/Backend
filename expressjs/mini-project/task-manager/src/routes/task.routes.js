import {Router} from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createTask, getAllTasks, updateTask, deleteTask } from '../controller/task.controller.js';

const router = Router();

router.get("/",authMiddleware, getAllTasks);

router.post("/", authMiddleware, createTask);

router.put("/:id", authMiddleware, updateTask);

router.delete("/:id", authMiddleware, deleteTask);

export default router;