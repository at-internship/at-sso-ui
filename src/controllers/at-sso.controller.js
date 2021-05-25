/**
 * AT SSO UI - AT SSO Controller.
 * Copyright 2021 AgileThought, Inc.
 *
 * General functions for at-sso-controller.
 *
 * @author @at-internship
 * @version 1.0
 *
 */

// Constants
const passport = require("passport");

// AT SSO Controller
const AT_SSO_CONTROLLER = {};

// AT-SSO - Index/Login
AT_SSO_CONTROLLER.renderSigninForm = async(req, res) => {
    console.log("--> AT_SSO_CONTROLLER.renderSigninForm");
    res.render("signin");
};

//AT-SSO - Signin
AT_SSO_CONTROLLER.signin = passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/signin",
    failureFlash: true,
  });

// AT-SSO - Logout
AT_SSO_CONTROLLER.signout = async(req, res) => {
    console.log("--> AT_SSO_CONTROLLER.signout");
    req.logout();

    // Redirect
    req.flash("success_msg", "User signout Successfully");
    res.redirect("/signin");
};

// AT-SSO - Home
AT_SSO_CONTROLLER.home = async(req, res) => {
    console.log("--> AT_SSO_CONTROLLER.home");
    res.render("home");
};

// AT-SSO - Out Team
AT_SSO_CONTROLLER.team = async(req, res) => {
    console.log("--> AT_SSO_CONTROLLER.team");
    res.render("team");
};

module.exports = AT_SSO_CONTROLLER;