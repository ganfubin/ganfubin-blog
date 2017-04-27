"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

const login = require('./api/login');
login.Api(router);

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    console.log(req.body);
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find({"account":"11","password":"11"},(err,data) =>{
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

//查询账号
router.get('/api/login/findAccount/:account/:password',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find({"account":req.params.account,"password":req.params.password},(err,data) =>{
        if (err) {
            res.send(err);
        } else {
            var result = {
                message: 'success',
                status: 200,
                data: data
            }
            res.send(JSON.stringify(result));
        }
    });
});

module.exports = router;