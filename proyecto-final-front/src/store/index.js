import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        personal: [],
        categorias: [],
        tickets: []
    },

    mutations: {
        SET_PERSONAL(state, personal) {
            state.personal = personal
        },
        SET_CATEGORIAS(state, categorias) {
            state.categorias = categorias
        },
        SET_TICKETS(state, tickets) {
            state.tickets = tickets
        }
    },

    actions: {
        crearCategoria({commit}, {params,onComplete,onError}) { // eslint-disable-line no-unused-vars
            
            axios.post('http://localhost:3000/categorias', params)
                .then(onComplete)
                .catch(onError)
        },
        obtenerCategorias({commit}) {
            commit("SET_LOADING", true)
            axios.get('http://localhost:3000/categorias')
                .then(response =>commit("SET_CATEGORIAS", response.data))
                .finally(() => commit("SET_LOADING", true))
        },
        eliminarCategoria({commit}, {id, onComplete, onError}){ // eslint-disable-line no-unused-vars
            axios.delete(`http://localhost:3000/categorias/${id}`)
            .then(onComplete)
            .catch(onError)
        }
    }
})