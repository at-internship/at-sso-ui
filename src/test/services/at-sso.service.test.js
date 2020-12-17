/**
 * AT SSO UI - AT SSO Service API Test.
 * Copyright 2020 AgileThought, Inc.
 *
 * Test for at-sso-api.service endpoint.
 *
 * @author @at-internship
 * @version 1.0
 */

// Constants
const expect = require("chai").expect;
const nock = require("nock");

// AT SSO Service API
const ssoServiceAPI = 'https://at-sso-api.herokuapp.com/api' + '/v1/user';
const ssoServiceAPI_400 = 'https://at-sso-api.herokuapp.com/api' + '/v1/users';

// MICROSERVICE - HEROKU - SSO
const atssoServiceAPI = require("../../services/at-sso-api.service");

// Operations
const getAllUsers = atssoServiceAPI.getAllUsers;
const getAllUsers_error = atssoServiceAPI.getAllUsers;
const addUser = atssoServiceAPI.addUser;

// http://at-sso-api.herokuapp.com/swagger-ui.html

// Mock Responses
const data = {};
const response = {
    body: {
        "id": "5fc8fce137c6fa549efd259a",
        "name": "Norma",
        "firstName": "Dolores",
        "lastName": "Canalizo",
        "email": "normacanalizo@mail.com",
        "password": "14785",
        "status": 1
    },
    status: 200
};

const response_error = {
    body: {
        "timestamp": "2020-12-02T17:46:32.409+00:00",
        "status": 400,
        "error": "Bad Request",
        "message": "The priority field only accepts 3 values {High, Medium, Low}",
        "path": "/user/"
    },
    status: 400
};

const data_add = {
    "name": "User",
    "firstName": "Test",
    "lastName": "Example",
    "email": "testuser@mail.com",
    "password": "88794sd",
    "status": 0
};
const response_add = {
    body: {
        id: "5fca50a9dea69968583a9635"
    },
    status: 200
};

describe("TEST: at-sso.service", () => {

    beforeEach(() => {
        nock("https://at-sso-api.herokuapp.com/api").get("/v1/user").reply(200, response);
        nock("https://at-sso-api.herokuapp.com/api").get("/v1/user").reply(400, response_error);
        nock("https://at-sso-api.herokuapp.com/api").post("/v1/user").reply(200, response_add);
        });

    it("Should Get All Users", () => {
        return getAllUsers()
            .then(response => {

                // Response Status
                expect(response).to.have.status(200);

                // Response
                expect(response.data.body).to.have.property("id");
            });
    });

    it("Should Get All Users - error", () => {
        return getAllUsers_error()
            .then(response_error => {
                //console.log(response_error);

                // Response Status
                expect(response_error).equals(undefined);

                // Response
            });
    });

    
    it("Should Add User", () => {
        return addUser(data_add)
            .then(response_add => {
                //console.log(response_add);

                // Response Status
                expect(response_add).to.have.status(200);

                // Response
                expect(response_add.data.body).to.have.property("id");
            });
    });

});