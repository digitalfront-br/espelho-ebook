import Vue from 'vue'
import UIKit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store' 

Vue.config.productionTip = false
UIKit.use(Icons);

new Vue({
  router, 
  UIKit,
  store,
  render: h => h(App)
}).$mount('#app')
