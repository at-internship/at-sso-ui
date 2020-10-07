const axios = require("axios");
// const config = require("../config");
//const { response } = require("../server");
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
console.log(AT_SSO_SERVICE_URI);

const USERSERVICE = {};
USERSERVICE.getAllUsers = () => { 
    return axios ({
        method: "GET",
            url: AT_SSO_SERVICE_URI + `/v1/user`,
            headers: {
                "content-type": "application/json",
            },

    }).catch(function(error) {
        console.log('Error: ' + error.message);
    });
};

module.exports = USERSERVICE;