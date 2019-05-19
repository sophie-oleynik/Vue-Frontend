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
                <v-flex xs19 d-flex class="mx-2">
                    <v-text-field label="Назва тесту" v-model="newTest.title" :error-messages="titleMessage"></v-text-field>
                </v-flex>
                <v-flex xs1 d-flex class="mx-2">
                    <v-text-field label="Оцінка за тест" type="number" v-model="newTest.maxMark" :error-messages="titleMessage"></v-text-field>
                </v-flex>
                <v-btn fab dark small @click="sendTest" color="cyan">
                    <v-icon dark>send</v-icon>
                </v-btn>
                <v-flex xs10 class="ml-3">
                  <v-flex xs12 class="mx-2">
                    <v-text-field label="Питання ..."></v-text-field>
                  </v-flex>
                  <v-flex xs12 d-flex justify-center>
                    <v-radio-group v-model="newQuestion.answers">
                      <v-flex xs12 d-flex wrap v-for="(question, index) in 4" :key="index">
                        <v-radio
                            :value="index" 
                        ></v-radio>
                        <v-text-field v-model="newQuestion.questions[index]" :label="`Варіант відповіді ${index + 1}`"></v-text-field>
                      </v-flex>
                    </v-radio-group>
                    <v-btn >Додати питання</v-btn>
                    <v-btn >Завершити тест</v-btn>
                  </v-flex>
                  
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
      newTest: {
          maxMark: null,
          author: '',
          title: '',
          subject: '',
          question: null 
      },
      newQuestion: {
        text: '',
        questions: ['', '', '', ''],
        answers: [false, false, false, false]
      },
      titleMessage: ''
    };
  },
  created() {
    this.newTest.author = this.$store.state.user.user.name;
    this.newTest.subject = this.$store.state.user.user.subject;
},
  methods: {
    ...mapActions([]),
    sendTest() {

    }
  },
  computed: {

  }
};
</script>

<style scoped>
</style>

