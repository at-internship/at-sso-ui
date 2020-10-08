const {getAllUsers, setUserInfo}=require("../services/user.service");
const userCtrl = {};

userCtrl.dashboard = async(req, res) => {
    let users;
    await getAllUsers().then((result) => {
        users = result.data;
        console.log("AQui");
    });
    
    res.render("dashboard/all-users",{
        users
    });
};

userCtrl.createnewUser = async(req,res) =>{
    
    let userid = req.body.id;
    let userName = req.body.name;
    let userFirstName = req.body.firstname;
    let userLastName = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let status = req.body.status;
    
   
    await setUserInfo(userName).then((result) => {
        //mensaje
        console.log("userid: " +  userid);
    console.log("userName: " +  userName);
    console.log("userFirstName: " +  userFirstName);
    console.log("userLastName: " +  userLastName);
    console.log("email: " +  email);
    console.log("password: " +  password);
    console.log("status: " +  status);
    });
};

userCtrl.renderUserForm = async(req,res) =>{
    res.render("forms/new-user");
};

module.exports = userCtrl;