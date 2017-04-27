import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = {};

var router = new Router({
	routes: [
	    {
		    path: '/',
			name: 'Home',
			component(resolve) {
		      require.ensure(['view/Hello'], () => {
		          resolve(require('view/Hello'));
		      });
		    }
	    },
	    {
		    path: '/about',
		    name: 'About',
		    component(resolve) {
			    require.ensure(['view/about'], () => {
			        resolve(require('view/about'));
			    });
			}
	    },
	    {
		    path: '/login',
		    name: 'Login',
		    component(resolve) {
			    require.ensure(['view/login'], () => {
			        resolve(require('view/login'));
			    });
			}
	    }
  	]
});

export default router;
