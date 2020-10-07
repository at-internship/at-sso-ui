const axios = require("axios");
// const config = require("../config");
//const { response } = require("../server");
const AT_SSO_SERVICE_URI = "https://at-sso-api.herokuapp.com/api";
console.log(AT_SSO_SERVICE_URI);






/*module.exports = {
    getAllUsers: () =>
        axios({
            method: "GET",
            url: AT_SSO_SERVICE_URI + `/v1/user`,
            headers: {
                "content-type": "application/json",
            },
        })
        .then(function(response) {
            console.log("getAllUsers: " + AT_SSO_SERVICE_URI + `/v1/user`);
        })
        .catch(function(error) {
            console.log('Error: ' + error.message);
        }),
    SetuserInfo: () =>
        axios ({
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
        .then(function(response) {
            console.log(response);
        })
        .catch(function(response) {
            console.log('Error: ' + error.message);
        })
}


*/
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