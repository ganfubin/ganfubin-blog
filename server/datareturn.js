/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要用于后端数据格式返回的处理
 */

/**
 *
 */
const returnData = function(setting){
	var obj = {};
	obj.status = setting.status;
	obj.data = setting.data;
	if(setting.type == 'success'){
		obj.message = setting.message || 'success';
	}else{
		obj.message = setting.message || 'error';
	}


	return JSON.stringify(obj);
}

module.exports = returnData;