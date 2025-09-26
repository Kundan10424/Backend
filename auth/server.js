


import express from "express"
import { connectDB } from "./src/config/DB.js"
import dotenv from "dotenv"
import userRoutes from "./src/routes/user.routes.js"
import taskRoutes from "./src/routes/task.routes.js"
import session from "express-session"
const PORT = process.env.PORT || 5000

dotenv.config()

const app = express()
app.use(express.json())

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized : true,
    cookie: {
        secure: false,
        maxAge: 1000*60*10
    }
}))

app.use('/api/users', userRoutes)
app.use('/api/tasks/', taskRoutes)

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

connectDB()
    .then(() => {
        console.log("Database connected successfully ✅")
        app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost:${PORT}👍`)
    })
    }).catch((err) => {
        console.err(`Internal server error❌`)
    })

