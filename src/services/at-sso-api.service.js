const axios = require("axios");

// LOCAL
//require("dotenv").config();
//const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI || `https://at-sso-api.herokuapp.com/api`;

// PROD
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
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

AT_SSO_SERVICE.setUserInfo = (userName, userFirstName, userLastName, userEmail, userPassword, userStatus) => {
    return axios({
        method: "POST",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
        headers: {
            "content-type": "application/json"
        },
        data: {
            name: userName,
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            password: userPassword,
            status: userStatus
        },
    }).catch(function(error) {
        console.log("Error: " + error.message);
    });
};

module.exports = AT_SSO_SERVICE;