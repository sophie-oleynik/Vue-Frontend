import axios from "axios";

const state = {
    schedule: null,
    group:  'іс-72'
};

const mutations = {
  'LOAD_SCHEDULE'(state, schedule) {
      state.schedule = schedule;
  }
};

const actions = {
    loadSchedule({commit}) {
        console.log('');
        axios.get(`https://api.rozklad.org.ua/v2/groups/ic-72/lessons`)
        .then(response => {
            console.log(response.data);
            commit('LOAD_SCHEDULE', response.data);
        }).catch(() => {console.log('Schedule problem');})
    }
};

const getters = {
    getSchedule (state) {
        return state.schedule;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};