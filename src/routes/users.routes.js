const router = require("express").Router();
const{
    dashboard,
    createnewUser,
    renderUserForm
} = require("../controllers/users.controller");

router.get("/dashboard", dashboard);

router.get("/forms", renderUserForm);
router.post("/forms/new-user", createnewUser)


module.exports = router;