const { Shop } = require("../../models/shopModel")
const { HttpError } = require("../../helpers/HttpErrors")

const getShopList = async (req, res) => {
  const result = await Shop.find({}, "shopName")

  if (!result) { throw HttpError(404, "Not found") }
  
  res.json(result)
}

module.exports = getShopList