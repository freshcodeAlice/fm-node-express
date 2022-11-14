const express = require('express');
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController');

const app = express();
const PORT = 3000;

const bodyParser = express.json();

app.post('/user', bodyParser, validateUser, UserController.createUser);
// створити роут для отримання всіх юзерів

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});

