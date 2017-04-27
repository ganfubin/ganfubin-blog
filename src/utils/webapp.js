/**
 * Created by ganfubin on 2017/4/24.
 * 该文件主要用于请求数据的公用方法
 */

//包引入
import $ from 'jquery';

//setting 的参数可以自定义扩展，对应扩展可以参考ajax需要的字段
const setting = {
	baseurl: 'http://localhost:8081'
}

//ajaxSettingsInit 单独抽出来是为了后面好扩展
const ajaxSettingsInit = function(settings){
	var param = {};
	param.url = setting.baseurl + settings.url
	return param;
}

//封装的ajax是为了在数据请求是做好统一过滤
const ajax = function(settings){
	var ajaxSettings = ajaxSettingsInit(settings);
	$.ajax($.extend(true, ajaxSettings, {
		 success: function (data, textStatus) {
		 	if(typeof settings.success == 'function') {
		 		try{
		 			var result = JSON.parse(data);
		 		}catch(e){
		 			console.log(e +'数据非json字符串格式');
		 			result = {}
		 		}
		 		settings.success(result, textStatus);
		 	}
		 },
		 complete: function(XMLHttpRequest, textStatus){
		 	//自定义函数 在settings可以不写
		 	//TODO

		 },
		 error: function(XMLHttpRequest, textStatus, errorThrown){
		 	try{
	 			var result = JSON.parse(data);
	 		}catch(e){
	 			console.log(e +'数据非json字符串格式');
	 			result = {}
	 		}
		 	if(typeof settings.error == 'function') {
		 		settings.error(result, textStatus);
		 	}
		 }
	}));
}

export default{
	ajax: ajax
}