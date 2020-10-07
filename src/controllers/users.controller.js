/*const userCtrl = {};

const userServiceAPI = require('../services/user.service');

console.log(userCtrl);

// Get All users 
userCtrl.dashboard = async(req, res) => {
    const responseUsers = await userServiceAPI.getAllUsers();
    console.log("userCtrl.dashboard.getAllUsers");
    console.log(responseUsers.data);
    const users = responseUsers.data;
    res.render("dashboard/all-users",{
        users
    });
};



console.log(userCtrl.dashboard);

module.exports = userCtrl;
*/

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