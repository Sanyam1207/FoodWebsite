const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        restaurantName : Joi.string().required(),
        price : Joi.number().min(0),
        image : Joi.string().allow("", null)
        
    }).required()
})