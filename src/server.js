import express from 'express';
import cors from 'cors';
import config from './config';
import indexRoute from './route/indexRoute';

const { PORT } = config;

const app = express();
app.use(cors());

// Router
app.use('/', indexRoute);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
