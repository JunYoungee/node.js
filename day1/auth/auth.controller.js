const express = require('express');
const router = express.Router();

const {login} = require('./auth.login.service');
const {join} = require('./auth.join.service');

router.post('/join', join);

router.post('/login', login);

// controller 맨 밑에 들어감
module.exports = router;
