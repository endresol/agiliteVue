import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const getters = {
  isAuthenticated: state => !!state.user.uid,
}

const state = {
    user: {},
    competitions: [{}],
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});
