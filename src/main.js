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


Vue.config.productionTip = true

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
