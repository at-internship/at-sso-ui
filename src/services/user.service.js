const axios = require("axios");
const config = require("../config");
const { response } = require("../server");

module.exports = {
    getAllUsers: () =>
        axios({
            method: "GET",
            url: config.AT_SSO_SERVICE_URI + `/user`,
            headers: {
                "content-type": "application/json",
            },
        })
        .then(function(response) {
            console.log("getAllUsers: " + config.AT_SSO_SERVICE_URI + `/user`);
        })
        .catch(function(response) {
            console.log('Error: ' + error.message);
        }),
    SetuserInfo: () =>
        axios ({
            method: "POST",
            url: config.AT_SSO_SERVICE_URI + `/user`,
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
        .then(function(response) {
            console.log(response);
        })
        .catch(function(response) {
            console.log('Error: ' + error.message);
        })
}