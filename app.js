import express from 'express';
import * as crypto from 'crypto';
import { connectToDB, insertToRequest } from './db.js';
const app = express();
const port = 3000

app.use(express.json());

const sqlitedb = './pokemontcg.db'
const db = connectToDB(sqlitedb);

app.get('/health', (req, res) => {
  payload = {
    status: 200
  }
  res.send(payload);
})

app.post('/request', (req, res) => {
  const requestId = crypto.randomUUID().toString();
  const payload = {
    ...req.body,
    uuid: requestId
  }
  console.log(payload);
  insertToRequest(db, payload);
  res.send({
    status: 200,
    uuid: requestId
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})