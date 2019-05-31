<template>
    <v-container>
        <v-layout wrap>
            <v-flex xs12 d-flex class="mt-5">
                <v-card class="pb-3">
                    <v-flex xs12>
                        <v-card class="mx-3 green absolute-title">
                            <v-layout>
                                <v-flex xs3  class="my-3 ml-3 white--text">
                                    <p class="my-0">Новий Тест</p>
                                    <p class="my-0 grey--text text--lighten-3 caption">Створіть та опублікуйте новий тест</p>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-layout wrap class="mt-5">
                        <v-flex xs12 d-flex class="mt-3 px-3">
                            <v-card class="pa-2" flat>
                                <v-layout wrap>
                                    <v-flex xs8 d-flex class="mx-5">
                                        <v-text-field label="Назва тесту" v-model="newTest.title" :error-messages="titleMessage"></v-text-field>
                                    </v-flex>
                                    <v-flex xs2 d-flex class="mx-4">
                                        <v-text-field label="Оцінка за тест" type="number" v-model="newTest.maxMark" :error-messages="markMessage"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 class="mx-5">
                                        <v-flex xs12>
                                            <v-text-field label="Питання ..." :error-messages="questionMessage" v-model="newQuestion.text"></v-text-field>
                                        </v-flex>
                                        <v-layout wrap>
                                            <v-flex xs12 d-flex justify-center>
                                                <v-radio-group v-model="newQuestion.answers">
                                                    <v-flex xs12 d-flex wrap v-for="(question, index) in 4" :key="index">
                                                        <v-radio
                                                                :value="index"
                                                        ></v-radio>
                                                        <v-text-field v-model="newQuestion.questions[index]" :label="`Варіант відповіді ${index + 1}`"></v-text-field>
                                                    </v-flex>
                                                </v-radio-group>
                                            </v-flex>
                                            <v-flex d-flex>
                                                <v-btn @click="addQuestion" class="indigo white--text">Додати питання</v-btn>
                                                <v-btn @click="sendTest" class="green white--text">Завершити тест</v-btn>
                                            </v-flex>
                                        </v-layout>
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
      newTest: {
          maxMark: null,
          author: '',
          title: '',
          subject: '',
          questions: [] 
      },
      newQuestion: {
        text: '',
        questions: ['', '', '', ''],
        answers: null
      },
      titleMessage: '',
      markMessage: '',
      questionMessage: '',
    };
  },
  created() {
    this.newTest.author = this.$store.state.user.user.name;
    this.newTest.subject = this.$store.state.user.user.subject;
},
  methods: {
    ...mapActions(['createTest', 'loadTests']),
    sendTest() {
      if (this.validTest()) {
        this.addQuestion();
        this.createTest(this.newTest);
        this.$store.state.test.tests.push(this.newTest);
        this.$router.push({ name: 'tests'});
      }
    },
    addQuestion () {
      if (this.validQuestion()) {
        const answerIndx = this.newQuestion.answers;
        this.newQuestion.answers = [false, false, false, false];
        this.newQuestion.answers[answerIndx] = true;
        this.newTest.questions.push(this.newQuestion);
        this.newQuestion = {
          text: '',
          questions: ['', '', '', ''],
          answers: null
        };
      }
    },
    validQuestion () {
      if (!this.newQuestion.questions.filter(item => {return item === ''}).length && 
          this.newQuestion.text !== '' && 
          this.newQuestion.answers != null) {
          
          this.questionMessage = "";
          return true;
      }
      if (this.newQuestion.text == '') {
        this.questionMessage = "Заповніть поле з питанням";
      } else if (this.newQuestion.questions.filter(item => {return item === ''}).length) {
        this.questionMessage = "Заповніть усі поля з варіантами відповіді";
      } else if (this.newQuestion.answers == null) {
        this.questionMessage = "Оберіть правильну відповідь"
      }

    },
    validTest () {
      if (this.newTest.questions.length > 0 && this.newTest.title !== '' && this.newTest.maxMark !== null) {
        return true;
      }
      if (this.newTest.title == '') {
        this.titleMessage = "Потрібно ввести назву теста";
      } else {
        this.titleMessage = "";
      }
      if (this.newTest.maxMark == null) {
        this.markMessage = "Потрібна оцінка за тест";
      } else {
        this.markMessage = "";
      } if (this.newTest.question.length == 0) {
        this.questionMessage = "Додайте хоча б 1 питання";
      } else {
        this.questionMessage = "";
      }
      return false;

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

