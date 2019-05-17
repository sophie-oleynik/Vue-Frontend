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
                <v-flex xs3 d-flex class="mx-2">
                    <v-text-field label="Назва" v-model="email" :error-messages="emailMessage"></v-text-field>
                </v-flex>
                <v-flex xs3 d-flex class="mx-2">
                    <v-text-field label="Предмет" v-model="email" :error-messages="emailMessage"></v-text-field>
                </v-flex>
                <v-flex xs1  class="mt-2 ml-3 px-2" d-flex>
                    <v-btn fab dark small color="cyan">
                        <v-icon dark>send</v-icon>
                    </v-btn>
                </v-flex>
                
                <v-flex xs10 class="ml-3">
                    <v-textarea
                        label="Повідомлення ..."
                    ></v-textarea>
                </v-flex>
                
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      newPost: {
          text: '',
          author: '',
          title: '',
          subject: '' 
      },
      toWhom: ''
    };
  },
  methods: {
  },
  computed: {

  }
};
</script>

<style scoped>

</style>

