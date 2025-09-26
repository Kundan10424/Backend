import express from 'express';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("name", "expressjs", {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        
    });
    res.send("Hello from server");
})

app.get("/product", (req, res) => {
    console.log("Cookies:", req.cookies);

    if(req.cookies.name && req.cookies.name !== "expressjs") {
        return res.status(403).send("Forbidden");
    }else{
        console.log("Cookie is valid");
        console.log("Cookie value:", req.cookies.name);
        res.status(200).send({
        id: 1,
        name: "Product 1",
        price: 100
    })
    }



})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


    // console.log(req.cookies) --- undefined
    // console.log("Headers", req.headers.cookie);
    // console.log("Cookies", req.cookies);