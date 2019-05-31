import axios from "axios";

const state = {
    user: null,
    users: null,
};

const mutations = {
  'LOAD_USERS'(state, users) {
      state.users = users;
  },
  'LOG_USER'(state, user) {
      state.user = user;
  },
  'LOG_OUT'(state) {
      state.user = null;
  },
  'ADD_TEST_RESULT'(state, testResult) {
    state.user.marks.push(testResult);
  }
};

const actions = {
    async loadUsers({commit}) {
        await axios.get('http://10.10.10.219:3000/users')
        .then(response => {
            console.log(response.data)
            commit('LOAD_USERS', response.data);
        }).catch(() => {})
    },
    loginUser({commit}, data) {
        if(this.state.user.users) {
            const user = this.state.user.users.filter((item) => {  if(item.email == data.email && item.password == data.passWord) { return item} });
            if (user.length > 0) {
                commit('LOG_USER', user[0]);
                return true;
            } else {
                return false;
            }
        } else { 
            return false;
        }
    },
    async createUser({commit}, newUser) {
        await axios.post('http://10.10.10.219:3000/users', newUser )
        .then(res => {
            commit('LOG_USER', res.data);
        })
        .catch(() => {});
    },
    logOutUser({commit}) {
        commit('LOG_OUT');
    },
    async addTestResult({commit}, testResult) {
        const user = this.state.user.user;
        user.marks.push(testResult);
        const url = 'http://10.10.10.219:3000/users/' + user._id;
        await axios.put( url, user)
            .then(() => { })
            .catch(() => { });
    },
    async addMessage({commit}, user) {
        console.log(user);
        const url = 'http://10.10.10.219:3000/users/' + user._id;
        await axios.put( url, user)
            .then(() => { })
            .catch(() => { });
    }
};

const getters = {
    isTeacher(state) {
        if (state.user) {
            return state.user.isTeacher;
        } else return false;    
    },
    isAuthentificated(state) {
        if(state.user) {
            return true;
        } else {
            return false;
        }
    },
    getUsers(state) {
        return state.users;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};