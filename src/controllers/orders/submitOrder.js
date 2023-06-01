const { User } = require('../../models/userModel')
const { Order } = require('../../models/orderModel')

const submitOrder = async (req, res) => {
    const { name, email, phone, address, order } = req.body
    console.log('req.body: ', req.body);

    let user = await User.findOne({ email })

    if (!user) {
        const newUser = await User.create({
            name, email, phone, address
        })

        user = newUser
    }

    const newOrder = await Order.create({
        order,
        owner: user._id
    })

    res.status(201).json({
        user,
        order,
    })
}

module.exports = submitOrder 