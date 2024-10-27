import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import { errorResponserHandler, invalidPathHandler } from './middleware/errorHandler.js';

// Routes
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('El servidor esta corriendo...');
});

app.use('/api/users', userRoutes);

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`El servidor esta corriendo en port ${PORT}`));