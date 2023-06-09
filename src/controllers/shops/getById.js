const { Shop } = require("../../models/shopModel")
const { HttpError } = require("../../helpers/HttpErrors")


const getById = async (req, res) => {
    const { id } = req.params
    const result = await Shop.findById(id)

    if (!result) { throw HttpError(404, "Not found") }

    res.json(result)
}

module.exports = getById