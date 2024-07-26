import express from 'express';
//importing dotenv
import dotenv from 'dotenv'
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// Testing port and sercer
// const port = 3000;
// Targetting ports from .env
const port = process.env.PORT || 3000
// importing user route
import userRoutes from './routes/userRoutes.js'
const app = express();

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready to go'))

app.use (notFound);
app.use (errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));