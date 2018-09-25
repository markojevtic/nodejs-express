var express = require('express');
var router = express.Router();
var userService = require('../services/userService');

router.get('/:id', function (req, res, next) {
    userService.getById(req.params.id).then( value => res.send(value));
});

router.get('/', function (req, res, next) {
    userService.findAll().then( value => res.send(value));
    console.log("Controller");
});

module.exports = router;
