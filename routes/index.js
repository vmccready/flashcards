const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
    
});

router.get('/hello', (req, res) =>{
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
    //res.render('hello', { name: req.cookies.username});
});

router.post('/hello', (req, res) =>{
    res.cookie('username', req.body.username)
    res.redirect('/');
    //res.render('hello', {name: req.body.username});
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;