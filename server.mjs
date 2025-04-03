import express from 'express';
import pg from 'pg'

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('Hello server folks')
})

app.listen(PORT, ()=>{
  console.log(`emr server running on PORT:${PORT}`)
})

const { Pool, Client } = pg

const pool = new Pool({
  user: 'dbuser',
  password: 'secretpassword',
  host: 'database.server.com',
  port: 3211,
  database: 'mydb',
})
 
console.log(await pool.query('SELECT NOW()'))
 
const client = new Client({
  user: 'dbuser',
  password: 'secretpassword',
  host: 'database.server.com',
  port: 3211,
  database: 'mydb',
})
 
await client.connect()
 
console.log(await client.query('SELECT NOW()'))
 
await client.end()