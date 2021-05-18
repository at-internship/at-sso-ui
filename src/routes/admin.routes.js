/**
 * AT SSO UI - AT Admin Routes.
 * Copyright 2021 AgileThought, Inc.
 *
 * General functions for admin-routes.
 *
 * @author @at-internship
 * @version 1.0
 *
 */

const express = require("express");
const router = express.Router();
const path = require('path');

// Helpers
const { isAdmin } = require("../helpers/auth.helper");

// Admin Controller
const {
    renderIndex,
    renderUserList,
    renderAddUserForm,
    addUser,
    renderEditUserForm,
    updateUser,
    deleteUser
} = require("../controllers/admin.controller");

// ============= Sub Routes =============

// AT-SSO - Admin - Index
router.get("/", isAdmin, renderIndex);

// AT-SSO - Admin - Users - Render User List
router.get("/user", isAdmin, renderUserList);

// AT-SSO - Admin - Users - Render Add User Form
router.get("/user/add", isAdmin, renderAddUserForm);

// AT-SSO - Admin - Users - Add User
router.post("/user/add", isAdmin, addUser);

// AT-SSO - Admin - Users - Render Edit User Form
router.get("/user/edit/:id", isAdmin, renderEditUserForm);

// AT-SSO - Admin - Users - Edit User
router.put("/user/edit/:id", isAdmin, updateUser);

// AT-SSO - Admin - Users - Delete User
router.get("/user/delete/:id", isAdmin, deleteUser);

module.exports = router;