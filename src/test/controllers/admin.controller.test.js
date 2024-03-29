/**
 * AT SSO UI - AT Admin Controller Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Unit Test for admin-controller.
 * 
 * @author @at-internship
 * @version 1.0
 */

 // Constants
const sinon = require("sinon");
const expect = require("chai").expect;

// AT Admin Controller
const adminController = require("../../controllers/admin.controller");

// AT SSO Service API
const ssoServiceAPI = require("../../services/at-sso-api.service");

describe("TEST: admin.controller.js", function () {
    let getAllUsersStub;
    let addUserStub;
    let updateUserStub;
    let deleteUserStub;

    beforeEach(function () {
        getAllUsersStub = sinon.stub(ssoServiceAPI, "getAllUsers");
        addUserStub = sinon.stub(ssoServiceAPI, "createUser");
        getUserByIdStub = sinon.stub(ssoServiceAPI, "getUserById");
        updateUserStub = sinon.stub(ssoServiceAPI, "updateUser");
        deleteUserStub = sinon.stub(ssoServiceAPI, "deleteUser");
    });
    afterEach(function () {
        getAllUsersStub.restore();
        addUserStub.restore();
        getUserByIdStub.restore();
        updateUserStub.restore();
        deleteUserStub.restore();
    });

    // AT-SSO - Admin - Index
    it("Should render admin Index", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderIndex(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-SSO - Admin - Users List   
    it("Should render admin users list view", function(done) {
        var res = { render: sinon.spy() };
        var req = { flash: sinon.spy() };
        var users = [];
        getAllUsersStub.returns(Promise.resolve(users));
        var view = adminController.renderUserList(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render admin users list view - error", function(done) {
        var res = { render: sinon.spy() };
        var req = { flash: sinon.spy() };
        var users = {};
        getAllUsersStub.returns(Promise.resolve());
        var view = adminController.renderUserList(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render admin user list view [catch]", function (done) {
        var res = {render:sinon.spy()};
        var req = {};
        getAllUsersStub.returns(Promise.resolve());
        var view = adminController.renderUserList(req, res).then(function (){
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-SSO - Admin - Render Add User Form 
    it("Should render add user form", function(done) {
        var res = { render: sinon.spy() };
        var req = { flash: sinon.spy() };
        var view = adminController.renderAddUserForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

  // AT- SSO - Admin - Add User   
    it("Should Add User Operation - error", function(done) {
        this.timeout(5000);
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = {
            body: {
                user_type: null,
                user_firstName: null,
                user_lastName: null,
                user_email: null,
                user_password: null,
                user_status: null
            },
            flash: sinon.spy()
        };
        var err = { response: sinon.spy() };
        var users = [];
        addUserStub.returns(Promise.resolve(err));
        var view = adminController.addUser(req, res).then(function() {
            expect(res.redirect.calledOnce).to.be.true;
            done();
        }).catch(done);
    });

    it("Should Add User Operation - false", function(done) {
        this.timeout(5000);
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = { flash: sinon.spy() };
        var users = [];
        addUserStub.returns(Promise.resolve(users));
        var view = adminController.addUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.false;
            done();
        }).catch(done);
    });

    it("Should Add User Operation - true", function(done) {
        this.timeout(5000);
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = { flash: sinon.spy() };
        var users = [];
        addUserStub.returns(Promise.resolve(users));
        var view = adminController.addUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.false;
            done();
        }).catch(done);
    });

    //AT-SSO - Call Create USER - POST /api/v1/users endpoint


     // AT-SSO - Admin - Render Edit User Form
    it("Should render edit user form", function(done) {
        this.timeout(5000);
        var res = { 
            render: sinon.spy() 
        };
        var req = { params: { id: 0 }, flash: sinon.spy() };
        var users = { data: [] };
        getAllUsersStub.returns(Promise.resolve(users));
        var view = adminController.renderEditUserForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        }).catch(done);
    });

    // AT-SSO - Admin - Edit User
    it("Should update user operation, user_id is null", function(done) {
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = {
        params: {
            id: null
        },
        flash: sinon.spy()
    };
        var view = adminController.updateUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.false;
            done();
        }).catch(done);
    });

    it("Should update users operation, usersErrors", function(done) {
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = {
            params: {
                id: 1
            },
            body: {
                user_type: null,
                user_firstName: null,
                user_lastName: null,
                user_email: null,
                user_password: null,
                user_status: null
            },
            flash: sinon.spy()
        };
        var view = adminController.updateUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        }).catch(done);
    });

    // AT-SSO - Call Update USER - PUT /api/v1/users endpoint
    

    // AT-SSO - Admin - Delete User  
    it("Should delete user operation", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.deleteUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
        });
    });

    it("Should delete user operation, user_id is null", function(done) {
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = {
        params: {
            id: null
        },
        flash: sinon.spy()
    };
        var view = adminController.deleteUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.false;
            done();
        }).catch(done);
    });
});