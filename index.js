const express = require('express');
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController');

const app = express();
const PORT = 3000;

const bodyParser = express.json();

app.post('/user', bodyParser, validateUser, UserController.createUser);
app.get('/users', UserController.getAllUsers);
app.get('/user', UserController.getOneUser);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});

