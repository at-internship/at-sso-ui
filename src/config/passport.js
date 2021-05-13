/**
 * AT SSO UI - AT Auth Passport.
 * Copyright 2021 AgileThought, Inc.
 *
 * General functions for passport.
 *
 * @author @at-internship
 * @version 1.0
 *
 */

// Constants
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// LOGIN_ENCRYPTION_ENABLED FLAG
const LOGIN_ENCRYPTION_ENABLED = process.env.LOGIN_ENCRYPTION_ENABLED;

// MICROSERVICE - HEROKU - AT SSO API
const SSO_SERVICE_API = require("../services/at-sso-api.service");

// Helpers
const { encrypt } = require("../helpers/auth.helper");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      // Match Email's User
      const request = {
        email: email,
        password: (LOGIN_ENCRYPTION_ENABLED == 'true') ? (await encrypt(password)).content : password
      };
      console.debug("Request-->", request);

      try {
        // Validate user
        const userAuth = await SSO_SERVICE_API.login(request);
        console.debug("userAuth-->", userAuth);

        if (!userAuth && !userAuth.data.id) {
          console.error("Not User found: ", email);
          return done(null, false, { message: "Not User found." });
        } else {
          // Get User details
          const user = await SSO_SERVICE_API.getUserById(userAuth.data.id); 
          console.debug("user-->", user);
          return done(null, user);
        }
      } catch (err) {
        console.error(err.message);
        return done(null, false, { message: "Not User found." });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.data.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await SSO_SERVICE_API.getUserById(id);
  done(null, user);
});