const adminCtrl = {};
const { userService } = require('../services/user.service');

let usersArray = [];
let usersModel = {};

// Index
adminCtrl.renderIndexAdmin = async function (req, res) {
    const usersJson = await userService.getUsers();

    for (let i = 0; i < usersJson.length; i++) {
        const user = usersJson[i];
        usersModel = {
            id: user.id,
            name: user.name,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            status: user.status
        }
        usersArray.push(usersModel);
    }

    res.render('admin/users/admin', { usersArray });
};

//Render user form
adminCtrl.renderUserForm = (req, res) => {
    res.render('admin/users/createUserForm');
}

//Add user
adminCtrl.addUser = (req, res) => {
    res.render('Hola aquí va la parte de agregar usuario');
}

module.exports = adminCtrl;
