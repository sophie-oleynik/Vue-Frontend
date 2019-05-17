import Axios from "axios";

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
        Axios.get("http://localhost:8082/test")
        .then(response => {
            console.log(response.data)
            commit('LOAD_TESTS', response.data);
        }).catch(() => {console.log('error');})
    },
    createTest({commit}, test) {
        console.log(test);
        Axios.post("http://localhost:8082/test")
            .then(response => { return response.data })
            .catch(() => {console.log('error')})
    },
    getTestById(id) {
        const test = null;
        Axios.get(`http://localhost:8082/test/${id}`)
            .then (response => { this.test = response.data })
            .catch(() => { console.log('Error')});
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