const {getAllUsers}=require("../services/user.service");
const userCtrl = {};

userCtrl.dashboard = async(req, res) => {
    let users;
    await getAllUsers().then((result) => {
        users = result.data;
    });
    res.render("dashboard/all-users",{
        users
    });
};
module.exports = userCtrl;