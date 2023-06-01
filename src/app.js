const express = require('express')
const cors = require('cors')

require("dotenv").config()

const shopsRouter = require('./routes/shopsRouter');
const orderRouter = require('./routes/orderRouter');

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("public")) // дозволяє експрессу віддавати статичні файли з указаної папки. І саме в цій папці за замовчуванням він буде файл шукати. В нас це аватарка користувача.

// app.get('/api/check', (req, res) => {
//   res.json({
//     "message": "api works"
//   })
// })

app.use('/api/shops', shopsRouter)
app.use('/api/orders', orderRouter)

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error " } = err
  res.status(status).json(message)
})

module.exports = app