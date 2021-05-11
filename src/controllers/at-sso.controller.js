const ssoCtrl = {};
const passport = require("passport");

// AT-SSO - Index/Login
ssoCtrl.renderSigninForm = async(req, res) => {
    console.log("--> ssoCtrl.renderSigninForm");
    res.render("signin");
};

ssoCtrl.signin = passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/signin",
    failureFlash: true,
  });

// AT-SSO - Logout
ssoCtrl.signout = async(req, res) => {
    console.log("--> ssoCtrl.signout");

    // Redirect
    req.flash("success_msg", "User signout Successfully");
    res.redirect("/signin");
};

// AT-SSO - Home
ssoCtrl.home = async(req, res) => {
    console.log("--> ssoCtrl.home");
    res.render("home");
};

// AT-SSO - Out Team
ssoCtrl.team = async(req, res) => {
    console.log("--> ssoCtrl.team");
    res.render("team");
};

module.exports = ssoCtrl;