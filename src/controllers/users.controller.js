const userServiceAPI = require('../services/user.service');

const userCtrl = {};

console.log(userCtrl);

// Get All users 
userCtrl.dashboard = async(req, res) => {
    const responseUsers = await userServiceAPI.getAllUsers();
    console.log("userCtrl.dashboard.getAllUsers");
    console.log(responseUsers.data);
    const users = responseUsers.data;
}

console.log(userCtrl.dashboard);

module.exports = userCtrl;