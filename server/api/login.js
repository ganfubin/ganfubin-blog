/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要登录页面的接口
 */
"use strict";

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

const Api = function(router){
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
};

module.exports = Api;