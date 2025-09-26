import express from 'express';
import {generateToken} from '../utils/token.utils.js';
const Router = express.Router();

Router.get("/generate-token", (req, res) => {
    const token = generateToken();

    res.status(200).send({
        message: "Token generated successfully",
        token: token
    })
})

Router.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to the public route"
    })
})

export default Router;