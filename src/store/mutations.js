import * as types from './mutation-types';

export const mutations = {
    [types.SIGN_IN] (state, user_payload) {
        state.user = user_payload;
    },
    [types.SIGN_OUT] (state) {
      state.user = {};
    },
    [types.SET_COMPETITIONS] (state, payload) {
      state.comptitions = payload;
    },
    [types.SET_DOGS] (state, dogs_payload) {
      state.dogs = dogs_payload;
    }

};
