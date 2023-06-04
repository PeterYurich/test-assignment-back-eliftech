const { HttpError } = require("../../helpers")
const { Order } = require("../../models/orderModel")
const { User } = require("../../models/userModel")

const getAllOrders = async (req, res, next) => {
  const { email } = req.query
  const { page = 1, limit = 10, favorite } = req.query
  const user = await User.findOne({ email })

  if (!user) { throw HttpError(404, "Not found") }

  const CurrentUserId = user._id
  const skip = (page - 1) * limit

  const query = { owner: CurrentUserId };

  const result = await Order.find(query, "-createdAt -updatedAt", { skip, limit })
    .populate("owner", "order")

  res.json(result)
}

module.exports = getAllOrders