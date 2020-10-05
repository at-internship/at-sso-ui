const { Router } = require('express');
const router = Router();

const { renderIndexAdmin, renderUserForm, addUser} = require('../controllers/admin.controller');

//Admin dashboard
router.get('/', renderIndexAdmin);

//Add user
router.get('/user', renderUserForm);
router.post('/user',addUser);

module.exports = router;
