const app = require('./server.js')
const supertest = require('supertest')

const request = supertest(app)
app.listen(3000)