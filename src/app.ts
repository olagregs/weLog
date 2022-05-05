import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import 'dotenv/config';

import "./database";
import { routes } from '../routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => console.log(`Running at 3333`));