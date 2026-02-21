import express from 'express';
import cors from 'cors';
import generateRouter from './routes/generate.js';
import mockRouter from './routes/mock.js';
import { ErrorHandler } from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '100kb' }));

dotenv.config();

mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        console.log('DB connected')
    })

app.get('/health', (req, res) => {
    res.status(200).send('ok');
})

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use('/', generateRouter);
app.use('/', mockRouter);

app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})