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

describe ('Admin Controller TEST', function(){

    let getAllUsersStub;

    beforeEach(function() {
        getAllUsersStub = sinon.stub(ssoServiceAPI, "getAllUsers");
    });
    afterEach(function() {
        getAllUsersStub.restore();
    });

 // AT-SSO - Admin - Index
    it("Should render admin Index", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderIndex(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

 // AT-SSO - Admin - Users List   
    it("Should render admin users list view", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var users = [];
        getAllUsersStub.returns(Promise.resolve(users));
        var view = adminController.renderUserList(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

 // AT-SSO - Admin - Render Add User Form 
    it("Should render add user form", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderAddUserForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

 // AT-SSO - Admin - Render Edit User Form
    it("Should render edit user form", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderEditUserForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

  // AT-SSO - Admin - Add User   
    it("Should AddUser", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.addUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

  // AT-SSO - Admin - Update User 
    it("Should UpdateUser", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.updateUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

    // AT-SSO - Admin - Delete User  
    it("Should DeleteUser", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.deleteUser(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

});