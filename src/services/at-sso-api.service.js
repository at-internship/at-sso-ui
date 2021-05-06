/**
 * AT SSO UI - AT SSO Service API.
 * Copyright 2020 AgileThought, Inc.
 *
 * Functions for at-sso-api.service endpoint.
 *
 * @author @at-internship
 * @version 1.0
 */

// Constants
const axios = require("axios");
const AT_SSO_SERVICE = {};

// LOCAL
//require("dotenv").config();
//const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI || `https://at-sso-api.herokuapp.com/api`;

// PROD
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
console.log("AT_SSO_SERVICE_URI:" + AT_SSO_SERVICE_URI);

// Operation: Login - POST /api/v1/login
AT_SSO_SERVICE.login = (data) => {
  return axios({
    method: "POST",
    url: `${AT_SSO_SERVICE_URI}/v1/login`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  });
};

// Operation: Get ALL USERS - GET/api/v1/users
AT_SSO_SERVICE.getAllUsers = () => {
    return axios({
        method: "GET",
        url: `${AT_SSO_SERVICE_URI}/v1/users`,
        headers: {
            "content-type": "application/json",
        },
    }).catch(function(error) {
        console.log("Error: " + error.message);
    });
};

// Operation: Get USER by ID - GET/api/v1/users/{id}
AT_SSO_SERVICE.getUserById = (id) => {
  return axios({
    method: "GET",
    url: `${AT_SSO_SERVICE_URI}/v1/users/${id}`,
    headers: {
      "content-type": "application/json",
    },
  }).catch(function (error) {
    console.log(`Error: ${error.message}`);
  });
};
// Operation; Create USER - POST /api/v1/users
AT_SSO_SERVICE.createUser = (data) => {
  return axios({
    method: "POST",
    url: `${AT_SSO_SERVICE_URI}/v1/users`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  });
};
// Operation: Update USER - PUT /api/v1/users
AT_SSO_SERVICE.updateUser = (data) => {
  return axios({
    method: "PUT",
    url: `${AT_SSO_SERVICE_URI}/v1/users/${data.id}`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  });
};
// Operation: Delete USER - DELETE /api/v1/users/{id}
AT_SSO_SERVICE.deleteUser = (id) => {
  return axios({
    method: "DELETE",
    url: `${AT_SSO_SERVICE_URI}/v1/users/${id}`,
    headers: {
      "content-type": "application/json",
    },
  });
};
//Add user
AT_SSO_SERVICE.addUser = (data) => {
    return axios({
        method: "POST",
        url: `${AT_SSO_SERVICE_URI}/v1/users`,
        data: data,
        headers: {
            "content-type": "application/json"
        }, 
    });
};

module.exports = AT_SSO_SERVICE;