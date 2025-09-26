import express from 'express';
import UserRouter from "./routes/user.routes.js"


const app = express();
app.use("/api/v1/users", UserRouter);

const PORT = 5000;

app.get("/", (req, res)=> {
    res.status(200).send("Hello World");
})




app.listen(PORT, ()=>[
    console.log(`Server is running on http://localhost:${PORT}`)
])