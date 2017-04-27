/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要用于 mongoose.Schema 配置
 */
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test');


// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));


/************** 定义模式Schema **************/
//login
const loginSchema = mongoose.Schema({
    account : String,
    password : String
});

//报表
const echartSchema = mongoose.Schema({
    title : String,
    value : String,
    date  : Date
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    echart: mongoose.model('Echart',echartSchema),
}

module.exports = Models;