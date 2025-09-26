// global impoorts
import express from 'express';
import session from 'express-session';

//local imports
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(session({
  secret: "secret-key",
  resave: false, 
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
  
}))



// routes
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes); // Assuming you have task routes set up similarly

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})