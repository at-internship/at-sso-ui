/**
 * AT SSO UI - AT-SSO Test Controller.
 * Copyright 2021 AgileThought, Inc.
 *
 * General functions for at-sso-controller-test.
 *
 * @author @at-internship
 * @version 1.0
 *
 */

// Constants
const sinon = require("sinon");
const expect = require("chai").expect;

// AT Admin Controller
const AT_SSO_CONTROLLER = require("../../controllers/at-sso.controller");

describe('AT SSO Controller test', function (){

    it("Should render sigin", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = AT_SSO_CONTROLLER.renderSigninForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should home", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = AT_SSO_CONTROLLER.home(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });


    it("Should sigin", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = AT_SSO_CONTROLLER.signin(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

    it("Should Logout", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = AT_SSO_CONTROLLER.signout(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

    it("Should Team - Success", function(){
        var req = {};
        var res = { render: sinon.spy() };
        var view = AT_SSO_CONTROLLER.team(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
        });
    })

});