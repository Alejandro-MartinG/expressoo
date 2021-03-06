const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')

require('dotenv').config()
require('./database/db')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`)
})
