const axios = require("axios");
const config = require("../config");
const AT_SSO_SERVICE_URI = config.AT_SSO_SERVICE_URI;

const userService = {};

console.log("AT_SSO_SERVICE_URI:" + AT_SSO_SERVICE_URI);

userService.getUsers = function () {
    return new Promise((resolve, reject) => axios({
        method: "GET",
        url: AT_SSO_SERVICE_URI,
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
            url: AT_SSO_SERVICE_URI,
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
