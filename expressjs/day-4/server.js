import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';


const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use(session({
    secret: "mysecretkey",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}))

app.use(cookieParser());

app.get("/", (req, res) => {
    console.log("Session:", req.session);
    console.log("Session id:", req.session.id);
    res.send("Hello from server");
})

app.get("/login", (req, res) => {
    req.session.user = {
        name: "John Doe",
        email: "john@example.com",
        age: 30
    };

    res.status(200).json({
        message: `${req.session.user.name} logged in successfully`,
        session: req.session
    });
})

app.get("/logout", (req, res) => {
    req.session.destroy()
    res.send({
        message: "Logged out successfully",
        session: req.session
    });
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})