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

describe ('Admin Controler TEST', function(){

    let getAllUsersStub;

    beforeEach(function() {
        getAllUsersStub = sinon.stub(ssoServiceAPI, "getAllUsers");
    });
    afterEach(function() {
        getAllUsersStub.restore();
    });

    it("Should render admin Index", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderIndex(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
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

    it("Should render add user form", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderAddUserForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
    
    it("Should render edit user form", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderEditUserForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
    
});