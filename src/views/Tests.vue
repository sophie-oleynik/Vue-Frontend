<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Tests
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-layout wrap> 
        <v-flex xs10 v-for="(item, index) in tests" :key="index">
          <v-card>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-title>{{ item.author }}</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        {
          author: "Teacher",
          questions: [
            {
              text: "What is your name",
              answers: [
                {
                  text: "Egor",
                  answer: true
                },
                {
                  text: "Ygor",
                  answer: false
                },
                {
                  text: "Agor",
                  answer: false
                },
                {
                  text: "Igor",
                  answer: false
                }
              ]
            }
          ],
          group: ["is-71", "is-72", "is-73"],
          mark: 10,
          name: "Test test"
        }
      ]
    };
  }
};
</script>



