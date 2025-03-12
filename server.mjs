import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('Hellow server folks')
})

app.listen(3000, ()=>{
  console.log(`emr server running on PORT:${PORT}`)
})