const ssoCtrl = {};

// AT-SSO - Index/Login
ssoCtrl.renderSigninForm = async(req, res) => {
    console.log("--> ssoCtrl.renderSigninForm");
    res.render("signin");
};

ssoCtrl.signin = async(req, res) => {
    console.log("--> ssoCtrl.signin");

    // Redirect
    req.flash("success_msg", "User signin Successfully");
    res.redirect("/home");
};

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

module.exports = ssoCtrl;