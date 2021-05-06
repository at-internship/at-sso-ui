const express = require("express");
const router = express.Router();
const path = require('path');

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

// Helpers
// const { isAdmin } = require("../helpers/auth");

// ============= Sub Routes =============

// AT-SSO - Admin - Index
router.get("/", renderIndex);

// AT-SSO - Admin - Users - Render User List
router.get("/user",renderUserList);

// AT-SSO - Admin - Users - Render Add User Form
router.get("/user/add", renderAddUserForm);
// AT-SSO - Admin - Users - Add User
router.post("/user/add", addUser);

// AT-SSO - Admin - Users - Render Edit User Form
router.get("/user/edit/:id", renderEditUserForm);
// AT-SSO - Admin - Users - Edit User
router.put("/user/edit/:id", updateUser);

// AT-SSO - Admin - Users - Delete User
router.get("/user/delete/:id", deleteUser);

module.exports = router;