import express from "express";


const app = express();
// app.use(express.json()); // Inbuilt Middleware

function sayHello( req, res, next){
    console.log("Hello from middleware");
    next();
    
}

// app.use(sayHello); // Global Middleware

const PORT = 5000;


app.get("/", sayHello,(req, res) => { // Specific rote middeleware
    res.status(200).send("Hello World");
})

app.get("/users", (req, res) => {
    res.status(200).send("Hello Users");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


//* 1.  Global Middleware 
//* 2.  Route Middleware
//* 3. Inbuilt Middleware
