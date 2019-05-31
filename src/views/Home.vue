<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 d-flex class="mt-5">
        <v-card class="pb-3">
          <v-flex xs12>
            <v-card class="mx-3 green absolute-title">
              <v-layout>
                <v-flex xs3  class="my-3 ml-3 white--text">
                  <p class="my-0">Головна сторінка</p>
                  <p class="my-0 grey--text text--lighten-3 caption">Переглядайте свої результати</p>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-layout wrap class="mt-5">
            <v-flex xs12>
              <v-layout wrap>
                <v-flex xs4 v-for="(mark, index) in marks" :key="index">
                  <v-card class="ma-3">
                    <v-card-title class="text-xs-center subheading grey lighten-2">Назва: {{ mark.title }}</v-card-title>
                    <v-card-text :class="resultMark(mark.studentMark, mark.maxMark)">
                      <span class="mr-5">Результат: {{ mark.studentMark }}/{{ mark.maxMark }}</span>
                      <span class="ml-5 pl-3">{{  mark.studentMark / mark.maxMark * 100}}%</span>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
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
  methods: {
    resultMark(student, mark) {
      if (mark != 0 && student / mark >= 0.75) {
        return 'green';
      } else if (student / mark < 0.75 && student / mark >= 0.25) {
        return 'yellow lighten-2'
      } else {
        return 'red lighten-1'
      }
    }
  },
  created () {
    if (!this.$store.state.user.user.teacher) {
      this.marks = this.$store.state.user.user.marks;
    } else {
      for (let i = 0; i < this.$store.state.user.users.length; i++) {
        if (this.$store.state.user.users[i].marks.length >= 1) {
          this.marks = this.marks.concat(this.$store.state.user.users[i].marks);
        }
      }
    }
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


