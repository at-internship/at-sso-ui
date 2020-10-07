const axios = require("axios");
const User = require("../models/User");
const USERS_SERVICE_URI = "https://at-sso-api.herokuapp.com/api/v1/user";

const userService = {};

userService.getUsers = function () {
    return new Promise((resolve, reject) => axios({
        method: "GET",
        url: USERS_SERVICE_URI,
        headers: {
            "content-type": "application/json"
        },
    }).then(response => {
        resolve(
            response.data
        )
    }).catch(err => {
        reject({
            err
        })
    }))
};

module.exports = {
    CreateUser: () => {
        axios({
            method: "POST",
            url: USERS_SERVICE_URI,
            data: {
                id: 'ObjectID',
                name: 'String',
                firstName: 'String',
                lastName: 'String',
                email: 'String',
                password: 'String (hash)',
                status: 'Integer 0,1',
            },
        })
    }, userService
}