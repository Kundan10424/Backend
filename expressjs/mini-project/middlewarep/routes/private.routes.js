import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

const Router = express.Router();

Router.get("/dashboard", authMiddleware ,(req, res) => {
    res.status(200).send({
        message: "Welcome to the private route"
    })
})

export default Router;