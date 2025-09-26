import { varifyToken } from "../utils/token.utils.js"

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']

    if (token && varifyToken(token)){
        req.user = { name: "John Doe", id: 1 }
        next()
    }else{
        res.status(401).send({
            message: "Unauthorized: Invalid or missing Token"
        })
    }
}

export default authMiddleware