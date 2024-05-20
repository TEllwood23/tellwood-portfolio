import express from 'express';
import indexRouter from './routes/index';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api', indexRouter);

export default app;
