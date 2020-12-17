// Constants
const sinon = require("sinon");
const expect = require("chai").expect;

// AT Admin Controller
const ssoCtrl = require("../../controllers/at-sso.controller");

describe('AT SSO Controller test', function (){

    it("Should render sigin", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = ssoCtrl.renderSigninForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should home", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = ssoCtrl.home(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });


    it("Should sigin", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = ssoCtrl.signin(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

    it("Should Logout", function() {
        var res = { render: sinon.spy() };
        var req = {};
        var view = ssoCtrl.signout(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
          
        });
    });

});