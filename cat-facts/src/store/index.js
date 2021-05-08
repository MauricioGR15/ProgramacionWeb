import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        datos: [],
        dato: {},
        datoRandom: null,
    },
    mutations: {
        SET_DATOS(state, datos) {
            state.datos = datos;
        },
        SET_DATO(state, dato) {
            state.dato = dato;
        },
        SET_DATO_RANDOM(state, datoRandom) {
            state.datoRandom = datoRandom;
        },
    },
    actions: {
        getDatos({ commit }) {
            axios
                .get("https://cat-fact.herokuapp.com/facts")
                .then(({ data }) => {
                    commit("SET_DATOS", data);
                })
                .catch((error) => console.log(error));
        },

        getDatoRandom({ commit }) {
            axios
                .get(`https://cat-fact.herokuapp.com/facts/random`)
                .then(({ data }) => commit("SET_DATO_RANDOM", data))
                .catch((error) => console.log(error));
        },

        getDato({ commit }, datoId) {
            this.state.datoId = null;

            axios
                .get(`https://cat-fact.herokuapp.com/facts/${datoId}`)
                .then(({ data }) => commit("SET_DATO", data))
                .catch((error) => console.log(error));
        },
    },
});
