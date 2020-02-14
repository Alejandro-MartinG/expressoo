require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use('/api/post', (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API' });
});

app.post('/api/post', (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err){
      res.sendStatus(403);
    } else {
      res.json({ message: 'Welcome to my POST', authData });
    }
  })
});

app.post('/api/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET )
  res.json(accessToken)
});

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});


app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`);
});
