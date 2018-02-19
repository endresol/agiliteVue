import Vue from 'vue';
import VueRouter from 'vue-router';

import Competitions from '../components/competitions';
import Signin from '../components/signin';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'Competitions', component: Competitions },
        {path: '/signin', name: 'Logg inn', component: Signin },
    ]
})
