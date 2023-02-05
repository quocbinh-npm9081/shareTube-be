import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import express, { Express, Request, Response } from 'express';
import Mongo from '@/config/mongo';

const app: Express = express();
const port = process.env.PORT;
const mongo_connection_string: string = process.env
  .MONGO_CONNECTION_STRING as string;

const db = new Mongo(mongo_connection_string);
app.use(morgan('combined'));
db.Contect();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
