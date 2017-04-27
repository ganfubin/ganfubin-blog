/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要登录页面的接口
 */

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

const Api = function(router, models){
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

	// 创建账号接口
	router.post('/api/login/createAccount',(req,res) => {
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
};

module.exports = Api;