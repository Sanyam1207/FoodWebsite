const Listing = require("./models/listing");
const Review = require("./models/review");
// const review = require("./models/review");
const { listingSchema } = require("./schema");
const ExpressError = require("./utils/expressErrors");

module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.session.redirectUrl );
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl; 
        res.locals.testurl = req.originalUrl;
        req.flash("error", "You Must be Logged in !!");
        res.redirect("/login");
        
    } else {
        next();
    };
};

module.exports.saveRedirectURL = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
        next();
    } else {
        next();
    }
    
};

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "You're not the owner, You don't have permission to do so!!");
        return res.redirect(`/listings/${id}`);
    };

    next();
}

module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    console.log(error);
    if(error){
        throw new ExpressError(400, error);
    }
    else{
        next();
    }
}


module.exports.isAuthor = async (req, res, next) => {
    console.log(req.params);
    let {id, reviewID} = req.params;
    let review = await Review.findById(reviewID);
    
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You did not create this review !!");
        return res.redirect(`/listings/${id}`);
    };

    next();
}