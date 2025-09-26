


import express from "express"
import crypto from 'crypto'
import cryptoRoutes from "./src/routes/crypto.routes.js"

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello, Crypto!")
}) 

app.use('/crypto', cryptoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

}) 