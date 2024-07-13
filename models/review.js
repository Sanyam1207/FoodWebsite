const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    food_quality: {
        type: Number,
        min : 1,
        max : 5
    },
    stars : {
        type: Number,
        min : 0,
        max : 5
    },
    customer_review : {
        type: String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

module.exports = mongoose.model("Review", reviewSchema);