<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Dashboard
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-flex class="subheading pl-5 my-3">Перша Недiля</v-flex>
      <v-flex d-flex xs12 justify-center>
          <v-flex xs2 class="mx-2" v-for="day in 5" :key="day">
              <v-card flat tile>
                <v-card-title class="green white--text pa-2 text-xs-center">
                  Monday
                </v-card-title>
                <div v-for="item in 4" :key="item">
                  <v-card-text>
                    {{ item }} Lesson
                  </v-card-text>
                  <v-divider></v-divider>
                </div>
              </v-card>
          </v-flex>
      </v-flex>
      <v-flex class="subheading pl-5 my-3">Друга Недiля</v-flex>
      <v-flex d-flex xs12 justify-center>
          <v-flex xs2 class="mx-2" v-for="day in 5" :key="day">
              <v-card>
                <v-card-title class="green white--text pa-2 text-xs-center">
                  Monday
                </v-card-title>
                <div v-for="item in 4" :key="item">
                  <v-card-text>
                    {{ item }} Lesson
                  </v-card-text>
                  <v-divider></v-divider>
                </div>
              </v-card>
          </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>



