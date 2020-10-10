import Vue from 'vue';
import Vuex from 'vuex';
import state from './num';
Vue.use(Vuex);
const myObj = new Vuex.Store({
    modules: {
      state
    }
  })
export default myObj;