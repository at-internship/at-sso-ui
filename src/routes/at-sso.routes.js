const express = require("express");
const router = express.Router();
const path = require('path');

// Admin Controller
const { renderSigninForm, signin, signout, home } = require("../controllers/at-sso.controller");

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-SSO - Index
router.get('/', renderSigninForm);

// AT-SSO - Login
router.get("/signin", renderSigninForm);
router.post("/signin", signin);

// AT-SSO - Logout
router.get("/signout", signout);

// AT-SSO - Home
router.get("/home", home);

module.exports = router;