const { default: Axios } = require("axios")

const axios = require("axios");
const User = require("../models/User");
const USERS_SERVICE_URI = "https://at-sso-api.herokuapp.com/api/v1/user";

exports.getUsers = function () {
    axios.get(USERS_SERVICE_URI).then(resp => {
        console.log(resp.data);
    });
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