import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database';
import apiRouter from './routes';

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.get('/api', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API' });
});

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
  console.log(`OctoFit Tracker API running at ${baseUrl}`);
});

