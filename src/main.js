import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

require('./assets/sass/main.scss');

new Vue ({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
