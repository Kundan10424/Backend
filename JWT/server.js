


import express from 'express';
import dotenv from 'dotenv';

import authRoutes from "./src/routes/auth.routes.js"
import privateRoutes from "./src/routes/private.routes.js"
import {connectDB} from './src/config/db.js';


dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json());



app.get('/', (req, res) =>  {
    res.send('Hello World!')
})

app.use('/auth', authRoutes)
app.use('/private', privateRoutes)

connectDB()
    .then(() => {
        console.log("Database connected successfully ✅")
        app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost:${PORT}👍`)
    })
    }).catch((err) => {
        console.err(`Internal server error❌`)
    })

