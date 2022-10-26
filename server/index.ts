import express, { Express, Request, Response } from 'express';
import houses from "./routes/houses.route";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.Promise = global.Promise;

const app: Express = express();
const port = process.env.PORT;

mongoose.connect('mongodb://localhost/real-state')
   .then(() =>  console.log('connection successful'))
   .catch((err) => console.error(err));

app.use("/api/houses", houses);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server!!!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});