import express from 'express';
import cors from 'cors';
import config from './config';

const { PORT } = config;

const app = express();
app.use(cors());

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
