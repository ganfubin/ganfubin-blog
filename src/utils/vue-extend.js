/**
 * 该文件验证vue全局方法(扩展全局方法可直接通过this调用) 2017/7/19
 */

export default {
	install: function(Vue, option){
		Vue.prototype.$toast = function(tips){
			let toastTpl = Vue.extend({
				template: '<div class="vue-toast">{{tips}}</div>',
				data(){
					return {
						tips: tips
					}
				},
				methods: {
					//这里写涉及的方法
				}
			});
			//将toast 插入html里面
			let toastHtml = new toastTpl().$mount().$el;
			console.log(toastHtml);
			document.body.appendChild(toastHtml)
		};

		//可以扩展其他方法
		//类似使用 Vue.prototype
	}
}  