import express from 'express';
import cors from 'cors';
import generateRouter from './routes/generate.js';
import mockRouter from './routes/mock.js';
import { ErrorHandler } from './middleware/errorHandler.js';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '100kb' }));

app.get('/health', (req, res) => {
    res.status(200).send('ok');
})

app.use('/', generateRouter);
app.use('/', mockRouter);

app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})