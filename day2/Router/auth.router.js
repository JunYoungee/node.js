const express = require('express');
const { body } = require('express-validator/check')
const { jwt } = require('../Service/auth.jwt')
const { update } = require('../Service/auth.update')

const router = express.Router();

const { create } = require("../Service/auth.create");
const { jwsauth } = require('../Service/auth.jwt');
const {login } = require("../Service/auth.login")
router.post('/create',[
    body('id').exists().trim().isString(),
    body('pw').exists().trim().isString().isLength({min: 5, max: 10}).withMessage("글자 수가 올바르지 않습니다."),
    body('email').exists().trim().isEmail()
],create);
router.post('/login', [
    body('id').exists().trim().isString(),
    body('pw').exists().trim().isString()
] ,login)

router.post('/update',[
    body('pw').exists().trim().isString().isLength({min: 5, max: 10})
] ,jwsauth, update)

module.exports = router;