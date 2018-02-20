import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import Competitions from '../components/competitions';
import SignIn from '../components/signin';
import SignUp from '../components/signup';
import Profile from '../components/profile';

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  console.log('isauth:', store.getters);
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/signin');
}

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'Competitions', component: Competitions },
        {path: '/signin', name: 'SignIn', component: SignIn },
        {path: '/signup', name: 'SignUp', component: SignUp },
        {path: '/profile', name: 'Profile', component: Profile, beforeEnter: ifAuthenticated },
    ]
})
