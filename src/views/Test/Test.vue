<template>
    <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        {{ test.name }}
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-layout wrap>
        <v-flex xs12 class="my-1" v-for="(item, index) in test.questions" :key="index">
            <v-card>          
                <v-card-title class="pb-0">Question: {{ index + 1 }}</v-card-title>
                <v-card-title class="pb-0">{{ item.text }}</v-card-title>
                <v-card-title class="pt-0">
                    <v-radio-group v-model="answers[index]">
                        <v-radio
                            v-for="(question, i) in item.variants"
                            :key="i"
                            :label="`${question}`"
                            :value="i"
                            
                        ></v-radio>
                        </v-radio-group>
                </v-card-title>
            </v-card>
        </v-flex> 
          <v-btn @click="finishTest">FINISH TEST</v-btn>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            test: {
                author: "Teacher",
                questions: [
                    {
                    text: "What is your name",
                    variants: ["Egor","Ygor","Agor","Igor"],
                    answers: [ true, false, false, false]
                    },
                     {
                    text: "What is your name",
                    variants: ["Egor","Ygor","Agor","Igor"],
                    answers: [ true, false, false, false]
                    },
                     {
                    text: "What is your name",
                    variants: ["Egor","Ygor","Agor","Igor"],
                    answers: [ true, false, false, false]
                    },
                     {
                    text: "What is your name",
                    variants: ["Egor","Ygor","Agor","Igor"],
                    answers: [ true, false, false, false]
                    }
                ],
                group: ["is-71", "is-72", "is-73"],
                mark: 10,
                name: "Test test"
            },
            answers: new Array(),
            result: 0
        };
    },
    computed: {
        questionMark() {
            return 100 / this.test.questions.length;
        }
    },
    methods: {
        finishTest(){
            this.test.questions.forEach((item,index) => {
                if( item.answers[this.answers[index]]) {
                    this.result += this.questionMark;
                }
            });
            console.log(this.result);
            this.result = 0;
        }
    },
    created () {

    }
}
</script>

<style>

</style>
