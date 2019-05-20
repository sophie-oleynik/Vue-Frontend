import axios from "axios";

const state = {
    chat: null
};

const mutations = {
  'LOAD_CHAT'(state, chat) {
      console.log(chat)
      state.chat = chat;
  }
};

const actions = {
    loadChat({commit}) {
        axios.get("http://localhost:8082/chat")
        .then(response => {
            commit('LOAD_CHAT', response.data);
        }).catch(() => {}) 
    },
    createPost({commit}, post) {
        axios.post("http://localhost:8082/chat", post)
            .then(response => { 
                return response.data })
            .catch(() => {})
    }
};

const getters = {
    getPosts (state) {
        return state.posts;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};