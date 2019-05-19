<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Навчальні статті
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-layout wrap>
        <v-flex xs12>
            <v-card v-for="(item, index) in getPosts" class="my-3" :key="index">
                <v-card-title class="title"><v-flex class="text-xs-center">{{ item.title }}</v-flex></v-card-title>
                <v-card-title class="py-0 font-weight-bold">{{ item.subject }}</v-card-title>
                <v-card-title class="py-0 font-weight-medium">{{ item.author }}</v-card-title>
                <v-card-text>{{ item.text.slice(0, 250) + '...' }}</v-card-text>
                <v-card-actions>
                  <v-flex d-flex justify-end>
                    <v-btn d-flex flat :to="`/post/${item.id}`">Більше</v-btn>
                  </v-flex>
                </v-card-actions>
            </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
      return {};
  },
  computed: {
      ...mapGetters(['getPosts']),
  }
};
</script>

