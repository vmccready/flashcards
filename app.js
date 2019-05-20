const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/cards', (req, res) =>{
    res.render('card', {prompt: "Who is buried in Gran'ts tomb?"});
});

app.listen(3000, () => {
    console.log('The application is running on local host:3000');
});
