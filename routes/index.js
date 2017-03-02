"use strict";
var express = require('express');
var router = express.Router();
// CSRF protection
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
// Get home page
router.get('/', function (req, res) { res.render('index'); });
// Get the login page
router.get('/login', function (req, res) {
    // Render the user to the index page of the login with actionLink parameter.
    res.render('login/index', {
        // Actionlink describe where does the form send the data.
        'actionLink': '/login',
        // It tells for the layout which button show.
        'login': true,
        'csrfToken': req.csrfToken()
    });
});
// Get the signup page
router.get('/signup', function (req, res) {
    // Render the user to the index page of the login with actionLink parameter.
    res.render('login/index', {
        // Actionlink describe where does the form send the data.
        'actionLink': '/signup',
        // It tells for the layout which button show.
        'login': false,
        'csrfToken': req.csrfToken()
    });
});
// Post form for login.
router.post('/login', function (req, res) {
    res.redirect('/');
});
// Post form for signup
router.post('/signup', function (req, res) { });
module.exports = router;
