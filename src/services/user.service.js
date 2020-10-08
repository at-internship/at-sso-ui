const axios = require("axios");
// const config = require("../config");
//const { response } = require("../server");
const AT_SSO_SERVICE_URI = "https://at-sso-api.herokuapp.com/api";
console.log(AT_SSO_SERVICE_URI);

/*const dataInfo = {
    id: "4566458321213asd",
    name:"Irving Mariano Espiritu Oliva",
    firstname: "Irving",
    lastname:"Espiritu",
    email:"irving@email.com",
    password:"123456",
    status:"A"
};*/

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