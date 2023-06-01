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


const userSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Set email for user'],
    },
    phone: {
        type: String,
        unique: true,
        required: [true, 'Set phone for user'],
    },
    address: {
        type: String,
        required: [true, 'Set address for user'],
    },
},
    {
        versionKey: false
    }
)

userSchema.post("save", handleMongooseError)

const User = model("user", userSchema)

const schemas = {
    submitOrderSchema
}

module.exports = {
    User, schemas
}