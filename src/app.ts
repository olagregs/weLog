import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get("/authClient", (request, response) => {
  return response.json({
    message: "First route is running"
  })
});

const url = "http://localhost:3333/authClient";

app.listen(3333, () => console.log(`Running at ${url}`));