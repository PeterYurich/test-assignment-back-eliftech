const { Schema, model } = require("mongoose")
const Joi = require("joi")

const { handleMongooseError } = require('../helpers')

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const submitOrderSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().pattern(emailRegexp).required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    order: Joi.array()
})


const orderSchema = new Schema({
    order:
        [{
            product: {
                type: Object
            },
            amount: {
                type: Number
            }
        }],

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
},
    {
        versionKey: false,
        timestamps: true
    }

)


orderSchema.post("save", handleMongooseError)

const Order = model("order", orderSchema)

const schemas = {
    submitOrderSchema
}

module.exports = {
    Order, schemas
}