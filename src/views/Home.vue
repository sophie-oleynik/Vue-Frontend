<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Головна
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-flex xs12>
        <v-layout wrap>
          <v-flex xs4 v-for="(mark, index) in marks" :key="index">
            <v-card class="ma-3">
              <v-card-title class="text-xs-center subheading">Назва: {{ mark.title }}</v-card-title>
              <v-card-text class="blue">Результат: {{ mark.studentMark }}/{{ mark.maxMark }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      marks: []
    }
  },
  created () {
    this.marks = this.$store.state.user.user.marks;
  }
};
</script>



