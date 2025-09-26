


import express from 'express';
import { createUser, getUsers, deleteUser, updateUser } from '../controller/user.controller.js';

const router = express.Router();


//* 1. Create
router.post("/create-users", createUser);


//* 2. Read
router.get("/get-users", getUsers);

//* 3. Update
router.put("/update-users/:id", updateUser)

//* 4. Delete
router.delete("/delete-users/:id", deleteUser);

export default router;