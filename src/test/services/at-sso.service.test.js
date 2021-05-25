/**
 * AT SSO UI - AT SSO Service API Test.
 * Copyright 2021 AgileThought, Inc.
 *
 * Test for at-sso-api.service endpoint.
 *
 * @author @at-internship
 * @version 1.0
 */

// Constants
const expect = require("chai").expect;
const nock = require("nock");

// MICROSERVICE - HEROKU - SSO
const AT_SSO_SERVICE_API = require("../../services/at-sso-api.service");

// MICROSERVICE - HEROKU - SS0
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
console.log(`at-sce.service.test - AT_SSO_SERVICE_URI: ${AT_SSO_SERVICE_URI}`);

// Operations
const login = AT_SSO_SERVICE_API.login;
const login_error = AT_SSO_SERVICE_API.login;

const getAllUsers = AT_SSO_SERVICE_API.getAllUsers;
const getAllUsers_error = AT_SSO_SERVICE_API.getAllUsers;

const createUser = AT_SSO_SERVICE_API.createUser;

const updateUser = AT_SSO_SERVICE_API.updateUser;

const deleteUser = AT_SSO_SERVICE_API.deleteUser;
const deleteUser_error = AT_SSO_SERVICE_API.deleteUser;

const getUserById = AT_SSO_SERVICE_API.getUserById;
const getUserById_error = AT_SSO_SERVICE_API.getUserById;

// http://at-sso-api.herokuapp.com/swagger-ui.html

// Mock Responses
const data = {};
const response = {
    body: {
      id: "604fc4def21087344f67ea38",
      type: 1,
      firstName: "admin",
      lastName: "AT",
      email: "admin@agilethought.com",
      status: 1,
    },
    status: 200
};

const response_error = {
    body: {
        "timestamp": "2020-12-02T17:46:32.409+00:00",
        "status": 400,
        "error": "Bad Request",
        "message": "The priority field only accepts 3 values {High, Medium, Low}",
        "path": "/users/"
    },
    status: 400
};

const data_add = {
  firstName: "Guillermo",
  lastName: "Ochoa",
  email: "Ochoa@hotmail.com",
  password: "jp23ba12b",
  status: 1,
  type: 2,
};
const response_add = {
    body: {
        id: "604f8e2dac1a413c8aba77a5"
    },
    status: 200
};

const userResponse_GetUserById = {
  body: {
    id: "604fc4def21087344f67ea38",
    type: 1,
    firstName: "admin",
    lastName: "AT",
    email: "admin@agilethought.com",
    status: 1,
  },
  status: 200,
};

const userResponse_GetUserById_NotFound = {
  body: {
    timestamp: "2021-04-27T22:47:33.661",
    status: 404,
    error: "Not Found",
    message: "User was not found with the given id: 604fc4def21087344f67ea39",
    path: "/api/v1/users/604fc4def21087344f67ea39",
    details: null,
  },
  status: 404,
};

const userData_Login = {
  email: "admin@agilethought.com",
  password: "4Gil3th0ught",
};

const userResponse_Login = {
  body: {
    id: "604fc4def21087344f67ea38",
  },
  status: 200,
};

const userData_Login_Unauthorized = {
  email: "admin@agilethought.com",
  password: "4gil3th0ught",
};

const userResponse_Login_Unauthorized = {
  body: {
    timestamp: "2021-04-29T06:52:54.621",
    status: 401,
    error: "Unauthorized",
    message: "Invalid login credentials.",
    path: "/api/v1/login",
    details: null,
  },
  status: 401,
};

const userData_Update = {
  email: "prueba123@agilethought.com",
  firstName: "Prueba123",
  id: "123456",
  lastName: "Prueba123",
  password: "Prueba123",
  status: 1,
  type: 2,
};

const userResponse_Update = {
  body: {
    email: "prueba123@agilethought.com",
    firstName: "Prueba123",
    id: "123456",
    lastName: "Prueba123",
    password: "Prueba123",
    status: 1,
    type: 2,
  },
  status: 200,
};

const userResponse_Delete_NotFound = {
  body: {
    timestamp: "2021-04-29T07:19:32.961",
    status: 404,
    error: "Not Found",
    message: "User was not found with the given id: 604fc4def21087344f67ea38",
    path: "/api/v1/users/604fc4def21087344f67ea38",
    details: null,
  },
  status: 404,
};

const userResponse_Delete = {};


describe("TEST: at-sso.service", () => {

    beforeEach(() => {
        nock("https://at-sso-api.herokuapp.com/api").get("/v1/users").reply(200, response);
        nock("https://at-sso-api.herokuapp.com/api").get("/v1/users").reply(400, response_error);

        nock("https://at-sso-api.herokuapp.com/api").post("/v1/users").reply(200, response_add);

        nock("https://at-sso-api.herokuapp.com/api").post("/v1/login").reply(200, userResponse_Login);
        nock("https://at-sso-api.herokuapp.com/api").post("/v1/login").reply(401, userResponse_Login_Unauthorized);

        nock("https://at-sso-api.herokuapp.com/api").get("/v1/users/604fc4def21087344f67ea38").reply(200, userResponse_GetUserById);
        nock("https://at-sso-api.herokuapp.com/api").get("/v1/users/604fc4def21087344f67ea39").reply(404, userResponse_GetUserById_NotFound);

        nock("https://at-sso-api.herokuapp.com/api").put("/v1/users/123456").reply(200, userResponse_Update);

        nock("https://at-sso-api.herokuapp.com/api").delete("/v1/users/604fc4def21087344f67ea38").reply(204, userResponse_Delete);
        nock("https://at-sso-api.herokuapp.com/api").delete("/v1/users/604fc4def21087344f67ea38").reply(404, userResponse_Delete_NotFound);

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
        return createUser(data_add)
            .then(response_add => {
                //console.log(response_add);

                // Response Status
                expect(response_add).to.have.status(200);

                // Response
                expect(response_add.data.body).to.have.property("id");
            });
    });

    it("Should Get User By Id - Call GET/api/v1/users/{id} - BE Success (Happy Path)", () => {
      return getUserById("604fc4def21087344f67ea38").then((response) => {
        // Response Status
        expect(response.status).to.equal(200);
  
        // Response
        expect(response.data.body).to.have.property("id");
      });
    });
  
    it("Should Get User By Id - Call GET/api/v1/users/{id} - BE Error - 404 Not Found", () => {
      return getUserById_error("604fc4def21087344f67ea39")
        .then((response) => {})
        .catch((error) => {
          expect(error.response.status).to.equal(404);
          expect(error.response.data.body.error).to.equal("Not Found");
        });
    });

    it("Should Do Login - Call POST /api/v1/login - BE Success (Happy Path)", () => {
      return login(userData_Login).then((response) => {
        // Response Status
        expect(response.status).to.equal(200);
  
        // Response
        expect(response.data.body).to.have.property("id");
      });
    });
  
    it("Should do Login - Call POST /api/v1/login - BE Error - 401 Unauthorized)", () => {
      return login_error(userData_Login_Unauthorized)
        .then((response) => {})
        .catch((error) => {
          expect(error.response.status).to.equal(401);
          expect(error.response.data.body.error).to.equal("Unauthorized");
        });
    });

    it("Should Update User - PUT /api/v1/users - BE Success (Happy Path)", () => {
      return updateUser(userData_Update).then((response) => {
        // Response Status
        expect(response.status).to.equal(200);
  
        // Response
        expect(response.data.body).to.have.property("id");
        expect(response.data.body).to.have.property("id").equals("123456");
      });
    });

    it("Should Delete User - Call DELETE /api/v1/users/{id} - BE Success (Happy Path)", () => {
      return deleteUser("604fc4def21087344f67ea38").then((response) => {
        // Response Status
        expect(response.status).to.equal(204);
  
        // Response
        expect(response.data).to.be.empty;
      });
    });
  
    it("Should Delete -  Call DELETE /api/v1/users/{id} - BE Error - 404 Not Found", () => {
      return deleteUser_error("604fc4def21087344f67ea38")
        .then((response) => {})
        .catch((error) => {
          expect(error.response.status).to.equal(404);
          expect(error.response.data.body.error).to.equal("Not Found");
        });
    });

});

