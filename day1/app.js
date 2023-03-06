const express = require('express');
const mongoose = require('mongoose')

const app = express();

const authcontroller = require('./auth/auth.controller')

app.use(express.json());
app.use('/auth', authcontroller); // 미들웨어
app.use('/contents', ()=>{
    console.log('helloWorld');
});

mongoose.
    connect('mongodb+srv://wnsdud96330:<password>@cluster0.uznhppl.mongodb.net/?retryWrites=true&w=majority', {dbName : "auth"})
    .then(()=>{
        console.log('DB에 연결되었습니다.')
        app.listen(8080);
        console.log('서버가 실행되었습니다.');
    })
    .catch((error)=>{
        console.log('DB연결에 실패하였습니다.');
        console.log(error);
    })
// app.listen(8080);
