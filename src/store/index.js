import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
  },

  mutations: {
  },

  getters: {
  },

  actions: {
    USER_AUTHENTICATION(state, { username, password }) {
      return new Promise((resolve, reject) => {
        if (username !== 'rato' && password !== '123') {
          resolve();
        } else {
          reject();
        }
      });
    },
  },

});
