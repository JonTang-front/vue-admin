// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css';

Vue.use(ElementUI)
Vue.use(animated)

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({
            path: '/login'
        });
    } else {
        next();
    }
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
