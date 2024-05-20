import express from 'express';
import indexRouter from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', indexRouter);

export default app;
