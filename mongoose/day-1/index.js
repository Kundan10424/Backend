


import express from 'express';
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

const  app = express()
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/api/", userRoutes)


// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})

