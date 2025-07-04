import express from 'express';
import uploadRouter from './routes/uploadRoute';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', uploadRouter);

export default app;
