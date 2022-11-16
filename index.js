const express = require('express');
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController');

const app = express();
const PORT = 3000;

const bodyParser = express.json();

app.post('/user', bodyParser, validateUser, UserController.createUser);
app.get('/users', UserController.getAllUsers);
app.get('/user/:userId', UserController.getOneUser);
app.delete('/user/:userId', UserController.deleteOneUser);
app.put('/user/:userId', bodyParser, UserController.updateUser);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});

