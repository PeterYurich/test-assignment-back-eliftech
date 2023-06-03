const express = require('express')

const ctrl = require("../controllers/orders/index.js")
// const submitOrder = require("../controllers/orders/submitOrder.js")
const getAllOrders = require("../controllers/orders/getAllOrders.js")

const router = express.Router()

const { ctrlWrapper } = require('../helpers')

const { validateBody } = require('../middlewares')

const { schemas } = require('../models/orderModel')


router.post('/',
    validateBody(schemas.submitOrderSchema),
    ctrlWrapper(ctrl.submitOrder))

router.get('/orders', ctrlWrapper(getAllOrders))

// router.put('/:shopId', isValidId,
//     validateBody(schemas.addShopSchema),
//     ctrlWrapper(ctrl.updateById))
// router.patch('/:shopId/favorite',
//     validateBody(schemas.updateProductsSchema),
//     ctrlWrapper(ctrl.updateFavorite))

// router.delete('/:shopId',
//     ctrlWrapper(ctrl.deleteById))

module.exports = router