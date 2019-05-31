import axios from "axios";

const state = {
    posts: null
};

const mutations = {
  'LOAD_POSTS'(state, posts) {
      state.posts = posts;
  }
};

const actions = {
    async loadPosts({commit}) {
        await axios.get('http://10.10.10.219:3000/posts')
        .then(response => {
            commit('LOAD_POSTS', response.data);
        }).catch(() => {}) 
    },
    async createPost({commit}, post) {
        await axios.post("http://10.10.10.219:3000/posts", post)
            .then(response => { 
                return response.data })
            .catch(() => {})
    },
    async getPostById(id) {
        const post = null;
        await axios.get(`http://10.10.10.219:3000/posts/${id}`)
            .then (response => { this.post = response.data })
            .catch(() => {});
            return post;
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