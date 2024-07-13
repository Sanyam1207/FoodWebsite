const express = require("express");
const router = express.Router({mergeParams : true});
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isAuthor } = require("../middlware.js");
const { destroyReview } = require("../controllers/review.js");
const reviewController = require("../controllers/review.js");



// ________________________________REVIEWS
//POST ROUTE 

router.post("/", isLoggedIn, reviewController.createReview);

//delete Route 

router.delete("/:reviewID", isLoggedIn, isAuthor, reviewController.destroyReview);

module.exports = router;
