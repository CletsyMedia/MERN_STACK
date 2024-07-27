import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
// cookie parser
import cookieParser from 'cookie-parser';

// Initialize dotenv to read .env files
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());

// Define routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready to go'));

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Define the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
