const { findOne } = require('../Schema/User')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const User = require('../Schema/User')

module.exports.update = async (req, res, next) =>{
    try{
        const {pw} = req.body
        const user = await User.findOne({id: req.id})

        const hashed = await bcrypt.hash(pw, 10)
        user.pw = hashed
        const result = await user.save();
        return res.status(201).json({message : '정상적으로 처리되었습니다.'})

    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: '서버측 에러가 발생했습니다.'
        })
    }
}