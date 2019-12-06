import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    level: 1
  },
  mutations: {
    increment: state => state.level++,
    set: (state, n) => {
      if (n > state.level) state.level = n;
    },
    reset: state => (state.level = 1)
  }
});
