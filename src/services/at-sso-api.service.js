/**
 * AT SSO UI - AT SSO Service API.
 * Copyright 2021 AgileThought, Inc.
 *
 * Functions for at-sso-api.service endpoint.
 *
 * @author @at-internship
 * @version 1.0
 */

// Constants
const axios = require("axios");
const AT_SSO_SERVICE = {};

// MICROSERVICE - HEROKU - SSO
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
console.debug(`at-sso-api.service - AT_SSO_SERVICE_URI: ${AT_SSO_SERVICE_URI}`);

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

module.exports = AT_SSO_SERVICE;