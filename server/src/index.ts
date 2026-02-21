import express from 'express';
import cors from 'cors';
import generateRouter from './routes/generate.js';
import mockRouter from './routes/mock.js';
import { ErrorHandler } from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

const app = express();

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
]

app.use(
    cors({
        origin: function (origin, callback) {
            if(!origin) return callback(null, true);
            if(allowedOrigins.includes(origin)) callback(null, true)
            else callback(new Error("Not allowed by CORS"));
        }
    })
);
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

app.set("trust proxy", true);

app.use('/', generateRouter);
app.use('/', mockRouter);

app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})