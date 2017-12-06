import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    news: [
      {
        id: 1,
        label: 'Items',
      },
      {
        id: 3,
        label: 'Car',
      },
      {
        id: 2,
        label: 'Spider',
      },
    ],
  },

  mutations: {
  },

  getters: {
    news: state => state.news,
    newsById(state) {
      return (id) => {
        return state.news.find(x => x.id === id);
      };
    },
  },

  actions: {
    USER_AUTHENTICATION(state, { username, password }) {
      return new Promise((resolve, reject) => {
        if (username === 'rato@test' && password === '123') {
          resolve();
        } else {
          reject();
        }
      });
    },
  },

});
