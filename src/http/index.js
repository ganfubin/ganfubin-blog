//包引入
import axios from 'axios';
import qs from 'qs';
import cache from 'utils/cache';

axios.defaults.timeout = 5000;
process.env.NODE_ENV == 'production' && (axios.defaults.baseURL = '');
/**
 *  目前有用到的就这两中方法 post get 
 *  如果后面有需求可以继续封装方法api
 *  具体api 可查询下面地址
 *  https://github.com/mzabriskie/axios
 *  
 */
var ajaxInit = function(){


}

var http = {
	post: function(setting){
		return  axios({
		            method: 'post',
		            url: setting.url,
		            data: qs.stringify(setting.data || {}),
		            headers: {
		            	'X-Requested-With': 'XMLHttpRequest',
		                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		            }
		        })
            .then(function (res) {
                typeof setting.success == 'function' && setting.success(res.data)
			})
            .catch(function (res) {
                typeof setting.error == 'function' && setting.error(res.data)
			})
		
	},
	//TODO 目前 post 和 get 就method不一样,但是还是把他们抽成两个方法 
	//后面会根据项目具体情况再次封装
	get: function(setting) {
		return  axios({
		            method: 'get',
		            url: setting.url,
		            params: setting.data || {},
		            headers: {
		                'X-Requested-With': 'XMLHttpRequest',
		                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		            }
		        })
            .then(function (res) {
                typeof setting.success == 'function' && setting.success(res.data)
			})
            .catch(function (res) {
				typeof setting.error == 'function' && setting.error(res.data)
			})
	},
	json: function(setting){
		
	}
}

exports.install = function (Vue, options) { 
    Vue.prototype.$http = http
}