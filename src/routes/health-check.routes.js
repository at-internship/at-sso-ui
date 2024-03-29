/**
 * AT SSO UI - AT HEALTH CHECK Routes.
 * Copyright 2021 AgileThought, Inc.
 *
 * General functions for health-check.routes.js
 *
 * @author @at-internship
 * @version 1.0
 *
 */

const express = require("express");
const router = express.Router();
var packageJ = require("../../package.json");
const simpleGit = require("simple-git");
const git = simpleGit();

let getLastCommit = async () => {
  try {
    git.init().addRemote("origin", "https://github.com/at-internship/at-sso-ui.git").fetch().log();
    console.debug("health-check.routes.js - branch: ", getBranchCurrent().toString().trim());
  
    const results = await Promise.all([
      git.raw("rev-parse", "origin/" + getBranchCurrent().toString().trim()),
    ]);
    console.debug("health-check.routes.js - commit: ", results.toString().trim());
    return results.toString().trim();
  } catch (error) {
    console.log(error);
  }
};

let getBranchCurrent = () => {
  if (process.env.NODE_ENV == "production") {
    return "master";
  } else {
    return "develop";
  }
};

router.get("/", async (_req, res, _next) => {
  const healthcheck = {
    version: packageJ.version,
    uptime: process.uptime(),
    message: "LIVE",
    timestamp: Date.now(),
    branch: await getBranchCurrent(),
    commit: String(await getLastCommit()),
    flags: {
      AT_SSO_SERVICE_URI_ENABLED: process.env.AT_SSO_SERVICE_URI_ENABLED,
      AT_SSO_WEB_TOKEN_ENABLED: process.env.AT_SSO_WEB_TOKEN_ENABLED,
      LOGIN_ENCRYPTION_ENABLED: process.env.LOGIN_ENCRYPTION_ENABLED,
      CREATE_USER_ENCRYPTION_ENABLED: process.env.CREATE_USER_ENCRYPTION_ENABLED,
      UPDATE_USER_ENCRYPTION_ENABLED: process.env.UPDATE_USER_ENCRYPTION_ENABLED,
    },
    services: {
      AT_SSO_SERVICE_URI: process.env.AT_SSO_SERVICE_URI,
      AT_SCE_SERVICE_URI: process.env.AT_SCE_SERVICE_URI,
      AT_UNIVERSITY_SERVICE_URI: process.env.AT_UNIVERSITY_SERVICE_URI,
      AT_RESOURCES_SERVICE_URI: process.env.AT_RESOURCES_SERVICE_URI
    },
  };

  try {
    res.send(healthcheck);
  } catch (e) {
    healthcheck.message = e;
    res.status(503).send();
  }
});

module.exports = router;