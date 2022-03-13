import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello m server!');
});

app.listen(8000, () => {
  console.log('listening at port 8000!');
});
