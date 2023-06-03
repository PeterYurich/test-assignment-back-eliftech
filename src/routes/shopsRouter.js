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

module.exports = router