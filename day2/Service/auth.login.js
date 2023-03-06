const User = require('../Schema/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

module.exports.login = async (req, res, next) =>{
    const validation = validationResult(req)
    if(!validation.isEmpty()){
        return res.status(400).json({
            message: "입력한 값이 올바르지 않습니다.",
            error : validation.errors
        })
    }
    const {id, pw} = req.body;

    try{
        const user = await User.find({id: id})
        // 아이디가 있는가
        if(!user[0]){
            return res.status(400).json({
                message: '존재하지 않는 사용자입니다.'
            })
        }
        // 비밀번호가 동일한가
        const hashResult = await bcrypt.compare(pw, user[0].pw);
        if(hashResult === false){
            return res.status(401).json({
                message: "비밀번호가 일치하지 않습니다."
            })
        }

        const token = jwt.sign({id}, 'dong', {expiresIn: "10m"})
        return res.status(201).json({
            auth : token
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: '알 수 없는 에러가 발생했습니다.'
        })
    }
}