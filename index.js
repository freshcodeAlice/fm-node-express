const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hello, world');
});
app.get('/index.html', (req, res)=>{
   res.status(404).end();
});

/*
Endpoint (кінцева точка), маршрути, роути, "ручка" - метод + шлях запиту

*/





app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});