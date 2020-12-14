/**
 * AT SSO UI - AT SSO Service API Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Integration Test for at-sso-api endpoint.
 * 
 * @author @at-internship
 * @version 1.0
 */

 // Constants
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

// AT SSO Service API
const ssoServiceAPI = 'https://at-sso-api.herokuapp.com/api' + '/v1/user';
const ssoServiceAPI_400 = 'https://at-sso-api.herokuapp.com/api' + '/v1/users';

describe('INTEGRATION TEST: at-sso-service', () => {

    /*it('Should Get All Users - 200', (done) => {
        chai.request(ssoServiceAPI)
            .get('/')
            .end(function (err, res) {
                //console.log(res.body);

                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });

    it('Should Fail Get All Users - 400', (done) => {
        chai.request(ssoServiceAPI_400)
            .get('/')
            .end(function(err, res) {
                console.log(res.body)

                // Response Status
                expect(res).to.have.status(404);

                // Response message
                expect(res).to.have.property('body');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('status').equals(404);
                expect(res.body).to.have.property('error');
                expect(res.body).to.have.property('error').equals('Not Found');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('message').equals('');
                expect(res.body).to.have.property('path');
                expect(res.body).to.have.property('path').equals('/api/v1/users/');

                done();
            });
    });*/
});