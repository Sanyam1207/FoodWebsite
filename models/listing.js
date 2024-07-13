const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    image : {
        url : String,
        fileName : String
    },
 
    price : {
        type : Number,
        required : true
    },

    restaurantName : {
        type : String,
        required : true
    },
    reviews : [{
        type : Schema.Types.ObjectId,
        ref : "Review"
    }],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"

    }
});

listingSchema.post("findOneAndDelete", async (req, res) => {
    if(Listing){
        await Review.deleteMany({_id : {$in : Listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
