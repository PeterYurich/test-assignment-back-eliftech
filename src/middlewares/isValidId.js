const { isValidObjectId } = require("mongoose")

const { HttpError } = require("../helpers/HttpErrors")

const isValidId = (req, res, next) => {
    console.log('isValidId');
    const { id } = req.params
    console.log('id: ', id);

    if (!isValidObjectId(id)) {
        next(HttpError(404, "Invalid id"))
    }
    next()
}

module.exports = { isValidId }