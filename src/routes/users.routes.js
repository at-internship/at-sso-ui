const router = require("express").Router();
const{
    dashboard
} = require("../controllers/users.controller");

router.get("/dashboard", dashboard);


module.exports = router;