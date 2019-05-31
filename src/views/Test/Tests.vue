<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 d-flex class="mt-5">
        <v-card>
          <v-flex xs12>
            <v-card class="mx-3 green absolute-title">
              <v-layout>
                <v-flex xs3  class="my-3 ml-3 white--text">
                  <p class="my-0">Тести</p>
                  <p class="my-0 grey--text text--lighten-3 caption">Знайденно {{ getTests.length }} тестів</p>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-layout wrap class="mt-5 mx-3">
            <v-flex xs4 v-for="(item, index) in getTests" :key="index">
              <v-card class="ma-2">
                <div class="title py-2 text-xs-center grey lighten-2 ">{{ item.title }}</div>
                <v-flex d-flex justify-space-between class="text-xs-center my-2">
                  <span>Оцінка за тест: {{ item.maxMark }}</span>
                  <span>Кількість питань: {{ item.questions.length }}</span>
                </v-flex>
                <v-card-actions>
                  <v-flex d-flex justify-center>
                    <v-btn @click="startTest(item._id)" class="mx-5 green white--text">Пройти Тест</v-btn>
                  </v-flex>
                </v-card-actions>
              </v-card>
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

<style scoped>
  .absolute-title {
    position: absolute;
    top: -25px;
    left: 0;
    width: 97%;
  }
</style>



