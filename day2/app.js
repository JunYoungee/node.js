const express = require('express');
const mongoose = require('mongoose');

const app = express();

const createRouter = require('./Router/auth.router')

app.use(express.json())
app.use('/auth', createRouter);

mongoose.connect("mongodb+srv://wnsdud96330:ajtwodl123@cluster0.uznhppl.mongodb.net/?retryWrites=true&w=majority", {dbName: "second"})
    .then((result)=>{
        console.log('서버가 실행되었습니다.')
        app.listen(8080);
    })
    .catch((error)=>{
        console.log(error)
    })
