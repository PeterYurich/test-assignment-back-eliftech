const express = require('express')
const ctrl = require("../controllers/shops/index.js")
const { ctrlWrapper } = require('../helpers')
const { validateBody, isValidId } = require('../middlewares')
const { schemas } = require('../models/shopModel')
const router = express.Router()


router.post('/',
    validateBody(schemas.addShopSchema),
    ctrlWrapper(ctrl.add))

router.get('/', ctrlWrapper(ctrl.getShopList))

router.get('/:id', isValidId, ctrlWrapper(ctrl.getById))

// router.put('/:shopId', isValidId,
//     validateBody(schemas.addShopSchema),
//     ctrlWrapper(ctrl.updateById))
// router.patch('/:shopId/favorite',
//     validateBody(schemas.updateProductsSchema),
//     ctrlWrapper(ctrl.updateFavorite))
// router.delete('/:shopId',
//     ctrlWrapper(ctrl.deleteById))

module.exports = router