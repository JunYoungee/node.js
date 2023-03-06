const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id :{
        type : String,
        require : true
    },
    pw : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    }
});

module.exports = mongoose.model('User', userSchema); // 스키마를 생성하면서 사용하기 위해 모델로 내보냄