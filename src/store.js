import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

        countries:[],
        search: '',

    },
    mutations: {
        addCountries (state, res) {
            state.countries = res
        },
        setInputValue (state, value) {
            state.search = value
        }
    },
    getters: {
        getCountries: state => {
          return state.countries
        },
        getInputValue: state => {
            return state.search
        },
    }    
})