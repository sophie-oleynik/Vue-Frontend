<template>
    <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        {{ test.title }}
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-layout wrap>
        <v-flex xs12 class="my-1" v-for="(item, index) in test.questions" :key="index">
            <v-card>          
                <v-card-title class="pb-0">Питання: {{ index + 1 }}</v-card-title>
                <v-card-title class="pb-0">{{ item.text }}</v-card-title>
                <v-card-title class="pt-0">
                    <v-radio-group v-model="answers[index]">
                        <v-radio
                            v-for="(question, i) in item.questions"
                            :key="i"
                            :label="`${question}`"
                            :value="i"
                            
                        ></v-radio>
                        </v-radio-group>
                </v-card-title>
            </v-card>
        </v-flex> 
          <v-btn @click="finishTest">Закінчити тест</v-btn>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            newMark: {
                title: '',
                studentMark: null,
                maxMark: null
            },
            test: null,
            answers: new Array(),
            result: 0,
            questionMark: null
        };
    },
    methods: {
        ...mapActions(['addTestResult']),
        finishTest(){
            this.test.questions.forEach((item,index) => {
                if( item.answers[this.answers[index]]) {
                    this.result += this.questionMark;
                }
            });
            this.newMark.title = this.test.title;
            this.newMark.maxMark = this.test.maxMark;
            this.newMark.studentMark = this.result;
            this.addTestResult(this.newMark);
            this.result = 0;
            this.$router.push({ name: 'home'});
        }
    },
    computed: {
        ...mapGetters(['getTests']),
    },
    created () {
        const id = this.$route.params.id;
        const tests = this.getTests;
        for (let i = 0; i < tests.length; i++) {
            if (tests[i].id == id ) {
                this.test = tests[i];
                break;
            }
        }
        this.questionMark = this.test.maxMark / this.test.questions.length;
    }
}
</script>

<style>

</style>
