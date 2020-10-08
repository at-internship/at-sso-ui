const axios = require("axios");
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
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

USERSERVICE.setUserInfo = (userName) =>{
    return axios ({
        method: "POST",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
        data: {
            name: userName

        },
    }).catch(function(error) {
        console.log('Error: ' + error.message);
    });
}

module.exports = USERSERVICE;

