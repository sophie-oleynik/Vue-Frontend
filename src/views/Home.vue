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
              <v-card-text :class="resultMark(mark.studentMark, mark.maxMark)">Результат: {{ mark.studentMark }}/{{ mark.maxMark }}</v-card-text>
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
  methods: {
    resultMark(student, mark) {
      if (mark != 0 && student / mark >= 0.75) {
        return 'green lighten-1';
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



