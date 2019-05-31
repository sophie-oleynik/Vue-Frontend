<template>
    <v-container>
        <v-layout wrap>
            <v-flex xs12 d-flex class="mt-5">
                <v-card class="pb-3">
                    <v-flex xs12>
                        <v-card class="mx-3 green absolute-title">
                            <v-layout>
                                <v-flex xs3  class="my-3 ml-3 white--text">
                                    <p class="my-0">Нова Стаття</p>
                                    <p class="my-0 grey--text text--lighten-3 caption">Створіть та опублікуйте нову статю</p>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-layout wrap class="mt-5">
                        <v-flex xs12 d-flex class="mt-3 px-3">
                            <v-card class="pa-2" flat>
                                <v-layout wrap>
                                    <v-flex xs11 d-flex class="mx-2">
                                        <v-text-field label="Назва статті" v-model="newPost.title" :error-messages="titleMessage"></v-text-field>
                                    </v-flex>
                                    <v-btn fab dark small @click="sendPost" color="cyan">
                                        <v-icon dark>send</v-icon>
                                    </v-btn>
                                    <v-flex xs12 d-flex class="mx-3">
                                        <v-textarea
                                                label="Текст ..."
                                                v-model="newPost.text"
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newPost: {
          text: '',
          author: '',
          title: '',
          subject: '' 
      },
      titleMessage: ''
    };
  },
  created() {
    this.newPost.author = this.$store.state.user.user.name;
    this.newPost.subject = this.$store.state.user.user.subject;
},
  methods: {
    ...mapActions(['createPost', 'loadPosts']),
    sendPost() {
      if (this.newPost.text != '' && this.newPost.title != '') {
        this.titleMessage = '';
        this.createPost(this.newPost);
        this.$store.state.post.posts.push(this.newPost);
        this.$router.push({ name: 'posts' });
      } else {
        this.titleMessage = 'Назва статті обов\'язкова'
      }
    }
  },
  computed: {

  }
};
</script>

<style scoped>
    .absolute-title {
        position: absolute;
        top: -25px;
        left: 0;
        width: 97%;
    }
</style>

