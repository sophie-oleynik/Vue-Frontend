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
    async loadTests({commit}) {
        await axios.get(`http://10.10.10.219:3000/tests`)
        .then(response => {
            commit('LOAD_TESTS', response.data);
        }).catch(() => {})
    },
    async createTest({commit}, test) {
        await axios.post("http://10.10.10.219:3000/tests", test)
            .then(response => {
                this.loadTests();
                return response.data
            })
            .catch(() => {})
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