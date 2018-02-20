import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

import { firebaseApp } from './firebaseApp';

require('./assets/sass/main.scss');


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
  }
})

new Vue ({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
