import axios from "axios";

const state = {
    schedule: null,
    group:  'іс-72'
};

const mutations = {
  'LOAD_SHEDULE'(state, shedule) {
      state.schedule = schedule;
      console.log(shedule)
  }
};

const actions = {
    loadSchedule({commit}) {
        axios.get(`https://api.rozklad.org.ua/v2/groups/${this.state.shedule.group}/lessons`)
        .then(response => {
            commit('LOAD_SHEDULE', response.data);
        }).catch(() => {console.log('Shedule problem');})
    }
};

const getters = {
    getShedule (state) {
        return state.shedule;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};