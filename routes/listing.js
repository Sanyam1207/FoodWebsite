const express = require("express");
const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/expressErrors.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middlware.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


const listingControllers = require("../controllers/listing.js");

router
    .route("/")
    .get(wrapAsync(listingControllers.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingControllers.createListing)
    );


//New Route
router.get("/new", listingControllers.renderNewForm);

//Show Route
router.get("/:id", wrapAsync(listingControllers.showListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingControllers.editListingPage));


//Update Route 
router.put("/:id", isLoggedIn, isOwner, upload.single("listing[image]"), validateListing,  wrapAsync(listingControllers.updateListing));

//Delete Route 
router.delete("/:id", isLoggedIn, isOwner, listingControllers.deleteListing);

module.exports = router;