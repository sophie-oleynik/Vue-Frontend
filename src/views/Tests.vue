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
        <v-flex xs4 v-for="(item, index) in tests" :key="index">
          <v-card>          
            <div class="display-1 py-2 text-xs-center">{{ item.name }}</div>
            <v-flex d-flex justify-space-between class="text-xs-center">
              <span>{{ item.author }}</span>
              <span>Groups: {{ item.group.toString() }}</span>
            </v-flex>
            <v-card-actions>
              <v-flex d-flex justify-center>
                <v-btn @click="startTest(index)" class="mx-5 primary">Try</v-btn>
              </v-flex>
            </v-card-actions>
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
              variants: ["Egor","Ygor","Agor","Igor"],
              answers: [ true, false, false, false]
            }
          ],
          group: ["is-71", "is-72", "is-73"],
          mark: 10,
          name: "Test test"
        }
      ]
    };
  },
  methods: {
    startTest(index) {
      this.$router.push({ path: `test/${index}`});
    }
  }
};
</script>



