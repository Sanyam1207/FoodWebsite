const express = require("express");
const router = express.Router(); 
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectURL } = require("../middlware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async(req, res) => {
    try{
        let {username, email, password} = req.body;
        let newUser = new User({email, username});
        let newUserRegistered = await User.register(newUser, password);
        console.log(newUserRegistered);
        req.login(newUserRegistered, (err) => {
            if (err) {
                return next(err)
            } else {
                req.flash("success", "Welcome to FoodCourt");
                res.redirect("/listings");
            }
        })
       
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup")
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login", saveRedirectURL,
passport.authenticate("local", 
    {failureRedirect : "/login", 
    failureFlash : true}),
async(req, res) => {
    req.flash("success","User Logged In Baby");

    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
    console.log(redirectUrl);
});

router.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if(err){
            next(err);
        } else {
            req.flash("success", "You Are Logged Out !!");
            res.redirect("/listings");
        };
    })
})

module.exports = router;