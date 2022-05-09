import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import 'dotenv/config';
import path from 'path';

import "./database";
import { routes } from '../routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/login', (request, response) => {
  response.render("html/login.html");
});

app.get('/home', (request, response) => {
  response.render("html/home.html");
});

app.listen(3333, () => console.log(`Running at 3333`));