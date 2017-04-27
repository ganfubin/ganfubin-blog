// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/';


import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
// import iView from 'iview';
import Vuex from 'vuex';


Vue.use(VueResource);
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

var html = document.getElementsByTagName('html')[0];
var w = document.documentElement.clientWidth || document.body.clientWidth;
html.style.fontSize = w / 750 + "px";

 var user = window.sessionStorage.getItem('userAccount');
 if(user){
 	store.dispatch('userInfo', user);
 }
 //跨域请求测试
//  $.ajax({
// 	url: 'http://localhost:8088/api/login/getAccount',
// 		success: function(data){
// 		console.log(data);
// 	}
// });
