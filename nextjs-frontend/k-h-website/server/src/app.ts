// k-h-website/server/src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter from './routes/index';

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Use the index router for routes starting with /api
app.use('/api', indexRouter);

export default app; // Export the app for use in server.ts
