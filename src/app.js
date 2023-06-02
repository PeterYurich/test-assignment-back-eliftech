const express = require('express')
const cors = require('cors')

require("dotenv").config()

const shopsRouter = require('./routes/shopsRouter');
const orderRouter = require('./routes/orderRouter');

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("public"))

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