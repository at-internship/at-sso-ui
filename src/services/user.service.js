const { default: Axios } = require("axios")

const axios = require ("axios");
const USERS_SERVICE_URI = "https://at-sso-api.herokuapp.com/api/v1/user";

console.log("USERS_SERVICE_URI:"+ USERS_SERVICE_URI )

//Metodo 2
/*const userService = {};

userService.getAllUsers = () =>{
    return axios ({
        method: "GET",
        url: USERS_SERVICE_URI,
        headers: {
            "content-type": "application/json"
        },

    });
};

module.exports = userService;
*/

//metodo 1
module.exports = {
    getAllUsers: () => 
    axios({
        method: "GET",
        url: USERS_SERVICE_URI,
        headers: {
            "content-type": "application/json",
        },
    })
}

module.exports = {
    CreateUser: () => 
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
}