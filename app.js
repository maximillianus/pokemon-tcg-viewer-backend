import express from 'express';
import * as crypto from 'crypto';
import { connectToDB, insertToRequest } from './db.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Method', '*');
  next();
});

const port = process.env.NODE_PORT;
const sqlitedb = process.env.REQUESTDB;
const db = connectToDB(sqlitedb);



app.get('/health', (req, res) => {

  const payload = {
    status: 200
  }
  res.send(payload);
})

app.post('/request', (req, res) => {

  const requestId = crypto.randomUUID().toString();
  const ipAddress = req.socket.remoteAddress;

  const payload = {
    ...req.body,
    uuid: requestId,
    ip_address: ipAddress
  }
  console.log("Payload:", payload);
  insertToRequest(db, payload);
  res.send({
    status: 200,
    uuid: requestId
  })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening on port ${port}`)
})