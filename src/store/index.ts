import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "Light",
    user: null
  },
  getters: {
    chtheme: state => {
      if (localStorage.theme) {
        state.theme = localStorage.theme;
      }
    }
  },
  mutations: {
    ctheme: state => {
      if (state.theme == "Light") {
        state.theme = "Dark";
        localStorage.theme = state.theme;
      } else {
        state.theme = "Light";
        localStorage.theme = state.theme;
      }
    },
    updateUser(state, { user }) {
      Vue.set(state, "user", user);
    }
  },
  actions: {
    ctheme: context => {
      context.commit("ctheme");
    },
    updateUser: context => {
      context.commit("updateUser");
    }
  }
});
