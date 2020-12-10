const axios = require("axios");

// LOCAL
//require("dotenv").config();
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI || `https://at-sso-api.herokuapp.com/api`;

// PROD
//const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
console.log("AT_SSO_SERVICE_URI:" + AT_SSO_SERVICE_URI);

const AT_SSO_SERVICE = {};

AT_SSO_SERVICE.getAllUsers = () => {
    return axios({
        method: "GET",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
        headers: {
            "content-type": "application/json",
        },
    }).catch(function(error) {
        console.log("Error: " + error.message);
    });
};

AT_SSO_SERVICE.addUser = (data) => {
    return axios({
        method: "POST",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
        data: data,
        headers: {
            "content-type": "application/json"
        }, 
    })
};

module.exports = AT_SSO_SERVICE;