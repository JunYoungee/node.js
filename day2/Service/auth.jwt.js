const jwt = require('jsonwebtoken')

module.exports.jwsauth = (req, res, next)=>{
    try{
        const token = req.get('Authorization').split(' ')[0]
        const verifyResult = jwt.verify(token, 'dong');
        req.id = verifyResult.id
        next();
    }
    catch(e) {
        console.log(e);
        res.status(500).json({error : e})
    }
}