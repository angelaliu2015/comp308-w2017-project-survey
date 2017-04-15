/**
File name: Index.js
Author: COMP308 Group 3
Website name: Its Survey
Description: the route file which controls all functions for Home navigation bar
*/
// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  indexController.DisplayContact(req, res);
});

module.exports = router;
