const Listing = require("../models/listing");


module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", {allListing});
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");        
};

module.exports.createListing = async (req, res) => {
    // let {title, description, image, price, restaurantName} = req.body;

    // console.log(listing);
   
    let listing = req.body.listing;
    let url = req.file.path;
    let fileName = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, fileName};
    // newListing.url = url;
    await newListing.save();
    req.flash("success", "New Listing Created !!");
    res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews", populate : {path : "author"},}).populate("owner");
    console.log(listing);
    res.render("listings/show.ejs", {listing});
};

module.exports.editListingPage = async (req, res) => {
    let {id} = req.params;

    let listing = await Listing.findById(id);
    
    if (listing) {
        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
        res.render("listings/edit.ejs", {listing, originalImageUrl});
    } else {
        req.flash("error", "The Lisiting You're trying to edit actually does not exist !!");
        res.redirect("/listings");
    };
    
    
};

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    console.log("____________")
    console.log(req.file);
    console.log("__________");

    if(typeof req.file !== 'undefined') {
        let url = req.file.path;
        let fileName = req.file.filename;
        listing.image = {url, fileName};
        await listing.save();
    } else {
        await listing.save();
    };

    req.flash("success", "Listing Updated Successfully !!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req,res) =>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    req.flash("success", "Listing Deleted Successfully !!")
    res.redirect("/listings");
};