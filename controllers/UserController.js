const User = require('../models/User');


module.exports.createUser = (req, res) => {
    const {body} = req;
    const user = new User(body);
    user.addUser();
    delete user.password;
    res.send(user);
}


module.exports.getAllUsers = (req, res) => {
    const users = User.findAll();
    res.send(users);
}

module.exports.getOneUser = (req, res) => {
    console.log(req.query);
}