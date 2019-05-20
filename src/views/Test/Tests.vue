<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Тести
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-layout wrap> 
        <v-flex xs4 v-for="(item, index) in getTests" :key="index">
          <v-card class="ma-2">          
            <div class="display-1 py-2 text-xs-center">{{ item.title }}</div>
            <v-flex d-flex justify-space-between class="text-xs-center">
              <span>Оцінка за тест: {{ item.maxMark }}</span>
            </v-flex>
            <v-card-actions>
              <v-flex d-flex justify-center>
                <v-btn @click="startTest(item.id)" class="mx-5 primary">Try</v-btn>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      tests: []
    };
  },
  methods: {
    ...mapActions([
      'createTest'
    ]),
    startTest(index) {
      this.$router.push({ path: `test/${index}`});
    }
  },
  computed: {
    ...mapGetters([
      'getTests'
    ]),
  }
};
</script>



