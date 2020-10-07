const axios = require("axios");

const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
console.log("AT_SSO_SERVICE_URI:" + AT_SSO_SERVICE_URI);

const userService = {};

userService.getUsers = function() {
    return new Promise((resolve, reject) => axios({
        method: "GET",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
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
            url: AT_SSO_SERVICE_URI + `/v1/user`,
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
    },
    userService
}