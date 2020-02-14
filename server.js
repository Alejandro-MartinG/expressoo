require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 5000;

const posts = [
  {
    username: 'Alejandro',
    title: 2
  },
  {
    username: 'Alfredo',
    title: 8
  },
  {
    username: 'Bercebal',
    title: 8
  }
]

app.use(express.json())

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API' })
});

app.get('/api/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/api/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json(accessToken)
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`)
})
