import { Router } from "express";

const UserRouter = Router();

UserRouter.get("/create-user", (req, res)=> {
    res.status(200).send("Hello Users");
})

UserRouter.get("/get-all-user", (req, res)=> {
    res.status(200).send("Hello Users");
})


UserRouter.get("/get-user/:id", (req, res)=> {
    const { id } = req.params;
    res.status(200).send(`Hello User ${id}`);
})

export default UserRouter;