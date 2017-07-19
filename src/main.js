// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/';
import Vuex from 'vuex';


//用于过滤
import filter from './filter/index.js';
Vue.use(filter);

//用于http
import http from './http/index.js';
Vue.use(http);

//用于指令
import directive from './directive/index.js';
Vue.use(directive);

//用于指令
import vueextend from './utils/vue-extend.js';
Vue.use(vueextend);


import ElementUI from 'element-ui';
Vue.use(ElementUI);








Vue.config.productionTip = false;
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

// var html = document.getElementsByTagName('html')[0];
// var w = document.documentElement.clientWidth || document.body.clientWidth;
// html.style.fontSize = w / 750 + "px";

//防止数据刷新 登录状态丢失
 var user = window.sessionStorage.getItem('userAccount');
 if(user){
 	store.dispatch('userInfo', user);
 }
