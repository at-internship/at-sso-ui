const adminCtrl = {};
const request = require('request');
const User = require('../models/User');
const { service } = require('../services/user.service');

// Index
adminCtrl.renderIndexAdmin = (req, res) => {
    res.send(service.getUsers());
};

//Render user form
adminCtrl.renderUserForm = (req, res) => {
    res.render('users/createUserForm');
}

//Add user
adminCtrl.addUser = (req, res) => {
    res.render('Hola aquí va la parte de agregar usuario');
}

module.exports = adminCtrl;
