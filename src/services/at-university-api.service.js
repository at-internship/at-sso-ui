const axios = require("axios");

// LOCAL
//require("dotenv").config();
//const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI || `https://at-university-api.herokuapp.com/api`;

// PROD
const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI;
console.log("AT_UNIVERSITY_SERVICE_URI:" + AT_UNIVERSITY_SERVICE_URI);