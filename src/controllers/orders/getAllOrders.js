const { Order } = require("../../models/orderModel")
const { User } = require("../../models/userModel")

const getAllOrders = async (req, res, next) => {
  console.log('req.query: ', req.query);
  const { page = 1, limit = 10, favorite } = req.query
  const user = await User.findOne({ email })
  const CurrentUserId = user._id
  const skip = (page - 1) * limit

  const query = { owner: CurrentUserId };

  const result = await Order.find(query, "-createdAt -updatedAt", { skip, limit })
    .populate("owner", "order")
    console.log('result: ', result);
  res.json(result)
}

module.exports = getAllOrders