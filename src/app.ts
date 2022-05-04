import 'reflect-metadata';
import express from 'express';

import "./database";
import { routes } from '../routes';

const app = express();

app.use(express.json());
app.use(routes);

const url = "http://localhost:3333";

app.listen(3333, () => console.log(`Running at ${url}`));