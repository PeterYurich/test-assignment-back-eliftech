const express = require('express')

const ctrl = require("../controllers/orders/index.js")
const getAllOrders = require("../controllers/orders/getAllOrders.js")

const router = express.Router()

const { ctrlWrapper } = require('../helpers')

const { validateBody } = require('../middlewares')

const { schemas } = require('../models/orderModel')


router.post('/',
    validateBody(schemas.submitOrderSchema),
    ctrlWrapper(ctrl.submitOrder))

router.get('/', ctrlWrapper(getAllOrders))

module.exports = router