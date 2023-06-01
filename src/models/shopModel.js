const { Schema, model } = require("mongoose")
const Joi = require("joi")

const { handleMongooseError } = require('../helpers')

const addShopSchema = Joi.object({
    shopName: Joi.string().required(),
    products: Joi.array().required(),
})

const shopSchema = new Schema({
    shopName: {
        type: String,
        minLength: 2,
        unique: true,
        required: [true, 'Set name for shop'],
    },
    products: [{
        productName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        pictureUrl: {
            type: String,
            default: 'https://th.bing.com/th/id/OIP.VPU5sN5Ee_cZn-Yoyl8DSQHaHa?pid=ImgDet&rs=1'
        }
    }]
},
    {
        versionKey: false
    }
)

shopSchema.post("save", handleMongooseError)

const Shop = model("shop", shopSchema)

const schemas = {
    addShopSchema
}

module.exports = {
    Shop, schemas
}