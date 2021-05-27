/**
 * AT SSO UI - AT SSO Routes.
 * Copyright 2021 AgileThought, Inc.
 *
 * General functions for at-sso-routes.
 *
 * @author @at-internship
 * @version 1.0
 *
 */

// Constants
const express = require("express");
const router = express.Router();
const path = require('path');

// AT SSO Controller
const { renderSigninForm, signin, signout, home, team } = require("../controllers/at-sso.controller");

// AT SSO Auth Helper
const { isAuthenticated } = require("../helpers/auth.helper");

// ============= Sub Routes ============= //

// AT-SSO - Index
router.get('/', renderSigninForm);

// AT-SSO - Login
router.get("/signin", renderSigninForm);
router.post("/signin", signin);

// AT-SSO - Logout
router.get("/signout", signout);

// AT-SSO - Home
router.get("/home", isAuthenticated, home);

// AT-SSO - Our Team
router.get("/team", isAuthenticated, team);

module.exports = router;