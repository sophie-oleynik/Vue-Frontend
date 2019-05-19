<template>
    <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Нова Стаття
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-flex xs12 d-flex class="mt-3 px-3">
        <v-card class="pa-2">
            <v-layout wrap>
                <v-flex xs10 d-flex class="mx-2">
                    <v-text-field label="Назва статті" v-model="newPost.title" :error-messages="titleMessage"></v-text-field>
                </v-flex>
                <v-btn fab dark small @click="sendPost" color="cyan">
                    <v-icon dark>send</v-icon>
                </v-btn>
                <v-flex xs10 class="ml-3">
                    <v-textarea
                        label="Текст ..."
                        v-model="newPost.text"
                    ></v-textarea>
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
    console.log(this.$store.state.user.user.name)
    this.newPost.author = this.$store.state.user.user.name;
    this.newPost.subject = this.$store.state.user.user.subject;
    console.log(this.newPost);

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

</style>

