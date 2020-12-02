const adminCtrl = {};

// MICROSERVICE - HEROKU - SSO
const ssoServiceAPI = require("../services/at-sso-api.service");

// AT-SSO - Admin - Index
adminCtrl.renderIndex = async(req, res) => {
    console.log("--> adminCtrl.renderIndex");
    res.render("admin/index");
};

// AT-SSO - Admin - Users - Render User List
adminCtrl.renderUserList = async(req, res) => {
    console.log("--> adminCtrl.renderUserList");
    let users = [];

    try {
        const responseUserList = await ssoServiceAPI.getAllUsers();
        if (responseUserList === null || responseUserList === undefined) {
            req.flash("error_msg", "Service unavailable");
        } else {
            users = responseUserList.data;
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        res.render("admin/user/index", { users });
    }
};


// AT-SSO - Admin - Users - Render Add User Form
adminCtrl.renderAddUserForm = async(req, res) => {
    console.log("--> adminCtrl.renderAddUserForm");
    res.render("admin/user/add-user");
};

// AT-SSO - Admin - Users - Add User
adminCtrl.addUser = async(req, res) => {
    console.log("--> adminCtrl.addUser");

    try {
        const {
            user_name,
            user_firstName,
            user_lastName,
            user_email,
            user_password,
            user_status,
        } = req.body;
       const userErrors = [];
        
        // Validations
        if (!user_name) {
            userErrors.push({ text: "Please Type a Name." });
        }

        if (!user_firstName) {
            userErrors.push({ text: "Please Type a First Name." });
        }

        if (!user_lastName) {
            userErrors.push({ text: "Please Type a Last Name." });
        }

        if (!user_email) {
            userErrors.push({ text: "Please Type an Email." });
        }

        if (!user_password) {
            userErrors.push({ text: "Please Type a Password." });
        }

        if (!user_status) {
            userErrors.push({ text: "Please Type a Status." });
        }
    
        if (userErrors.length > 0) {
            res.render("admin/user/add-user", {
                userErrors,
                user_name,
                user_firstName,
                user_lastName,
                user_password,
                user_email,
                user_status,
            });
    
        } else {
            // Send data to microservice
            await ssoServiceAPI.setUserInfo(user_name, user_firstName, user_lastName, user_email, user_password, user_status).then(result => {
                //mensaje
                console.log("name: " + user_name);
                console.log("firstName: " + user_firstName);
                console.log("lastName: " + user_lastName);
                console.log("email: " + user_email);
                console.log("password: " + user_password);
                console.log("status: " + user_status);
            });
            // Redirect
                req.flash("success_msg", "User Added Successfully");
                res.redirect("/admin/user");
           }
        } catch (err) {
            console.error(err.message);
            req.flash("error_msg", "Error message");
            res.redirect("/admin/user");
        }    
};

// AT-SSO - Admin - Users - Render Edit User Form
adminCtrl.renderEditUserForm = async(req, res) => {
    console.log("--> adminCtrl.renderEditUserForm");
    res.render("admin/user/edit-user");
};

// AT-SSO - Admin - Users - Edit User
adminCtrl.updateUser = async(req, res) => {
    console.log("--> adminCtrl.updateUser");

    const user_id = req.params.id;
    console.log("--> user id:" + user_id);
    if (!user_id) {
        req.flash("error_msg", "Not Authorized");
        return res.redirect("/admin/user");
    }

    const {
        user_name,
        user_firstName,
        user_lastName,
        user_email,
        user_status,
    } = req.body;
    const userErrors = [];

    // Validations
    if (!user_name) {
        userErrors.push({ text: "Please Type a Name." });
    }

    if (!user_firstName) {
        userErrors.push({ text: "Please Type a First Name." });
    }

    if (!user_lastName) {
        userErrors.push({ text: "Please Type a Last Name." });
    }

    if (!user_email) {
        userErrors.push({ text: "Please Type an Email." });
    }

    if (!user_status) {
        userErrors.push({ text: "Please Type a Status." });
    }

    if (userErrors.length > 0) {
        res.render("admin/user/edit-user", {
            userErrors,
            user_id,
            user_name,
            user_firstName,
            user_lastName,
            user_email,
            user_status,
        });
    } else {
        // Send data to microservice

        // Redirect
        req.flash("success_msg", "User Updated Successfully");
        res.redirect("/admin/user");
    }
};

// AT-SSO - Admin - Users - Delete User
adminCtrl.deleteUser = async(req, res) => {
    console.log("--> adminCtrl.deleteUser");

    try {
        const errors = [];

        let user_id = req.params.id;
    
       
        // Redirect
        req.flash("success_msg", "User Deleted Successfully");
    } catch (err) {
        console.log(err.response);
        if (err.response && err.response.data) {
            let errorMsg = err.response.data.message;
            req.flash("error_msg", errorMsg);
        }
    }
    res.redirect("/admin/user");
    };

module.exports = adminCtrl;