import express from 'express';
import publicRouter from './routes/public.routes.js';
import privateRouter from './routes/private.routes.js';
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json());

app.use("/public", publicRouter)
app.use("/private", privateRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

