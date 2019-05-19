import axios from "axios";

const state = {
    user: null,
    users: [
        {
            email: 'egortkachenco@gmail.com',
            password: '123'
        },
        {
            email: "123",
            password: "123"
        }
    ],
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
    state.user.test.push(testResult);
  }
};

const actions = {
    loadUsers({commit}) {
        axios.get("http://localhost:8082/user")
        .then(response => {
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
    createUser({commit}, newUser) {
        axios.post("http://localhost:8082/user", newUser ) //!!!
        .then(response => { commit('LOG_USER', newUser); })
        .catch(() => {});
    },
    logOutUser({commit}) {
        commit('LOG_OUT');
    },
    addTestResult({commit}, testResult) {
        const user = this.state.user;
        user.test.push(testResult);
        axios.post("http://localhost:8082/user", user)
            .then(() => { commit('ADD_TEST_RESULT', testResult); })
            .catch(() => { console.log('error')});
    }
};

const getters = {
    isTeacher(state) {
        if (state.user) {
            return state.user.teacher;
        } else return false;    
    },
    isAuthentificated(state) {
        if(state.user) {
            return true;
        } else {
            return false;
        }
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};