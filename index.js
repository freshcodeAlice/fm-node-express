const express = require('express');
const validateUser = require('./middlewares');

const app = express();
const PORT = 3000;

const bodyParser = express.json();

app.post('/user', bodyParser, validateUser);





app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});


/*
Зареєструвати юзера

+1. Прийняти запит на певний endpoint
+2. Розпарсити дані, які прийшли з запитом.
+3. Перевірити (валідувати) дані.
4. Зберегти ці дані.
5. Створити сесію юзера. 
6. Підготувати дані юзера у відповідь. 
7. Надіслати підготовлені дані у відповідь на запит.




*/