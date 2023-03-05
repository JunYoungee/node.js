const express = require('express');

const router = express.Router();

const {create} = require("../Service/auth.create");

router.post('/create', create);

module.exports = router;