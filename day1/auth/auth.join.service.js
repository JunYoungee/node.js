const User = require('../Database/User');


module.exports.join = (req, res, next)=> {
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    User.find({id : id})
        .then((result)=>{
            if(result[0]){
                console.log(result)
                return res.status(401).json({
                    message: '이미 등록된 사용자입니다.'
                })
                // 이미 있는 ID 입니다. 안내 후 DB에 등록하면 안됨.
            }
            const nUser = new User({
                id: id,
                pw: pw,
                name: name,
                email: email,
                phone: phone
            })
            nUser.save() // 저장
                .then(()=>{
                    // 저장이 완료되었습니다.
                    return res.status(201).json({
                        message: '저장이 완료되었습니다.'
                    })
                })
                .catch((error)=>{
                    // 저장이 되지 않았습니다.
                    console.log(error)
                    return res.status(500).json({
                        message: '저장과정에서 알 수 없는 에러가 발생하였습니다.',
                        location: '찾기'
                    })
                })
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({
                message: '알 수 없는 에러가 발생하였습니다.',
                location: '찾기'
            })
        })
}