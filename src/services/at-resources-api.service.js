const axios = require("axios");

// LOCAL
//require("dotenv").config();
//const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI || `https://at-resources-api.herokuapp.com/api`;

// PROD
const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI;
console.log("AT_RESOURCES_SERVICE_URI:" + AT_RESOURCES_SERVICE_URI);