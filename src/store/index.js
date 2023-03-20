import Vuex from "vuex";
import Vue from "vue";
import textModule from "./textModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    textModule,
  },
});

export default store;
