const User = require('../Schema/User')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports.create= async (req,res,next)=>{
    const validation = validationResult(req)
    if(!validation.isEmpty()){
        return res.status(400).json({
            message: "입력한 값이 올바르지 않습니다.",
            error : validation.errors
        })
    }
    const { id, pw, email } = req.body;


    try{
        const result = await User.find({id : id})
        if(result[0]){
            return res.status(401).json({
                message: "이미 사용중인 ID 입니다."
            })
        }

        const hashed = await bcrypt.hash(pw, 10);
        console.log(hashed);

        const newUser = new User({
            id,
            pw: hashed,
            email
        })
        const saveResult = await newUser.save();
        return res.status(201).json({
            message: '등록이 완료했습니다.'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: '알 수 없는 에러가 발생했습니다.'
        })
    }
}