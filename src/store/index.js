import { createStore } from "vuex";

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  getters: {
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a, b) => {
        return a.population < b.population ? 1 : -1;
      });
    },
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setpaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch("https://restcountries.com/v3/all");
        const data = await res.json();
        commit("setPaises", data);
      } catch (e) {
        console.log(e);
      }
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter((pais) =>
        pais.region.includes(region)
      );
      commit("setpaisesFiltrados", filtro);
    },
    filtroNombre({ commit, state }, nombre) {
      const nombreCliente = nombre.toLowerCase();
      const filtro = state.paises.filter((pais) => {
        const textoApi = pais.name.common.toLowerCase()
        if (textoApi.includes(nombreCliente)) {
          return pais
        }
      });
      commit('setpaisesFiltrados',filtro)
    },
  },
  modules: {},
});
