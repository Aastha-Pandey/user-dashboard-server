import express from 'express';
import cors from 'cors';
const app = express();

const users = [
  {
    id: 1,
    name: 'John',
    username: 'john1',
    address: 'New york',
    phoneNumber: '2345671590',
    email: 'john@gmail.com',
    dateOfBirth: '7 jan 1980',
  },
  {
    id: 2,
    name: 'Harry',
    username: 'harry1',
    address: 'India',
    phoneNumber: '6755671590',
    email: 'harry@gmail.com',
    dateOfBirth: '10 march 1989',
  },
  {
    id: 3,
    name: 'Clay',
    username: 'clay1',
    address: 'Paris',
    phoneNumber: '3985791590',
    email: 'clay@gmail.com',
    dateOfBirth: '16 july 1995',
  },
];
app.use(cors());
app.get('/user', (req, res) => {
  res.json(users.filter((user) => Number(req.query.id) === user.id));
});
app.get('/alluser', (req, res) => {
  res.json(users);
});

app.listen(8000, () => {
  console.log('listening at port 8000!');
});
