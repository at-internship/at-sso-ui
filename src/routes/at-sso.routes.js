const { Router } = require('express');
const router = Router();

const { renderIndexAdmin, renderUserForm, addUser} = require('../controllers/admin.controller');
const { UserServiceApi } = require('../controllers/users.controller');

//Admin dashboard
router.get('/', UserServiceApi);

//Add user
router.get('/user', renderUserForm);
router.post('/user',addUser);

module.exports = router;
