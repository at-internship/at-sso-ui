const { response } = require("express");
const UserServiceApi = require("../services/user.service");
const TestUser = {};

TestUser.UserServiceApi = async(req, res) => {
    const responseUserService = await UserServiceApi.getAllUsers();
    console.log("UserServiceApi.getAllUsers");
    console.log(responseUserService);
};

TestUser.UserServiceApi = async(req, res) => {
    const {id, name, firstName, lastName, email, password, status} = UserServiceApi.CreateUser();
}

module.exports = TestUser; 