import axios from "axios";

const state = {
    tests: null
};

const mutations = {
  'LOAD_TESTS'(state, tests) {
      state.tests = tests;
  }
};

const actions = {
    loadTests({commit}) {
        axios.get("http://localhost:8082/test")
        .then(response => {
            console.log(response.data)
            commit('LOAD_TESTS', response.data);
        }).catch(() => {console.log('error');})
    },
    createTest({commit}, test) {
        axios.post("http://localhost:8082/test", test)
            .then(response => { return response.data })
            .catch(() => {console.log('error')})
    }
};

const getters = {
    getTests (state) {
        return state.tests;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};