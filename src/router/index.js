import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = {};

var router = new Router({
	routes: [
	    {
		    path: '/',
			redirect: '/home',
			component(resolve) {
		      require.ensure(['view/home'], () => {
		          resolve(require('view/home'));
		      });
		    }
	    },
	    {
		    path: '/home',
			name: 'Home',
			component(resolve) {
		      require.ensure(['view/home'], () => {
		          resolve(require('view/home'));
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
