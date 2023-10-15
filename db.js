// const sqlite3 = require('sqlite3').verbose();
import * as crypto from 'crypto';
import sqlite3 from 'sqlite3';


const pokemonRequest = {
  uuid: crypto.randomUUID().toString(),
  search_text: 'pikachu',
  pokemon: 'pikachu',
  ip_address: '1.2.3.4'
}

function insertToRequest(dbconn, payload) {
  let sql = `INSERT INTO requests (uuid, search_text, pokemon, sets, ip_address)
             VALUES (
              '${payload.uuid}',
              '${payload.search_text}',
              '${payload.pokemon}',
              '${payload.sets}',
              '${payload.ip_address}'
              )`
  dbconn.run(sql, (err, result) => {
    if (err) throw err;
    console.log('Insert succeeds');
  })
}

function selectFromRequests(dbconn) {
  let sql = `SELECT * FROM requests`

  db.all(sql, (err, result) => {
    console.log(result);
  })
}

function connectToDB(dbname) {
  const db = new sqlite3.Database(dbname, sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to pokemontcg DB!')
    })

  return db;
}

function closeConnection(dbconn) {
  dbconn.close();
}

export {
  connectToDB,
  insertToRequest
}

// const db = connectToDB('./pokemontcg.db')
// insertToRequest(db, pokemonRequest);
// selectFromRequests(db)
