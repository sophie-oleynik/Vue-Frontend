<template>
  <v-container>
    <v-layout wrap>
         <v-flex xs12>
            <v-card class="my-3">
                <v-card-title class="title"><v-flex class="text-xs-center">{{ post.title }} </v-flex></v-card-title>
                <v-divider class="mb-3"></v-divider>
                <v-card-title class="py-0 font-weight-bold">{{ post.subject }}</v-card-title>
                <v-card-title class="py-0 font-weight-medium">{{ post.author }}</v-card-title>
                <v-card-text>{{ post.text }}</v-card-text>
            </v-card>
        </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            post: {
                title: "",
                author: "",
                subject: "",
                text: ""
            }
        }
    },
    computed: {
        ...mapGetters(['getPosts']),
    },
    created() {
        this.post = this.$store.state.post.posts.filter(item => { return item._id == this.$route.params.id })[0];
    }

}
</script>

<style>

</style>
