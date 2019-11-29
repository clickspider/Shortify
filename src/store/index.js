import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "store"
});

export default new Vuex.Store({
  strict: true,
  plugins: [vuexLocalStorage.plugin],
  state: {
    urls: []
  },
  mutations: {
    shortedUrl(state, args) {
      if (args.status === 201) {
        state.urls.push(args.data);
      }
    },

    removeItem(state, id) {
      state.urls.splice(id, 1);
    }
  },
  actions: {
    async shortUrl({ commit }, payload) {
      try {
        const URL_SHORTED = await axios.post("https://rel.ink/api/links/", {
          url: payload
        });
        commit("shortedUrl", URL_SHORTED);
      } catch (err) {
        commit("shortedUrl", err);
      }
    },

    removeItem({ commit }, id) {
      commit("removeItem", id);
    }
  },
  getters: {
    urls: state => {
      return state.urls;
    }
  }
});
