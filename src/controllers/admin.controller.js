const adminCtrl = {};

// Index
adminCtrl.renderIndexAdmin = (req, res) => {
    res.render('hola aqui va el index admin');
};

//Render user form
adminCtrl.renderUserForm = (req,res) => {
    res.render('hola aqui va user form');
}

//Add user
adminCtrl.addUser = (req,res) => {
    res.render('hola aqui va add user');
}

module.exports = adminCtrl;
