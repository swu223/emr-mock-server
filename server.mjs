import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('Hello server folks')
})



app.listen(PORT, ()=>{
  console.log(`emr server running on PORT:${PORT}`)
})