<template>
  <v-container>
    <v-layout wrap>
        <v-flex xs12 d-flex class="mt-5">
            <v-card class="pb-3">
                <v-flex xs12>
                    <v-card class="mx-3 green absolute-title">
                        <v-layout>
                            <v-flex xs3  class="my-3 ml-3 white--text">
                                <p class="my-0">Навчальний матеріал</p>
                                <p class="my-0 grey--text text--lighten-3 caption">Знайденно {{ getPosts.length }} статей</p>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-layout wrap class="mt-5">
                    <v-flex xs12 v-for="(item, index) in getPosts" class="my-2 mx-3" :key="index">
                        <v-card flat>
                            <v-card-title class="title"><v-flex class="text-xs-center">{{ item.title }}</v-flex></v-card-title>
                            <v-card-title class="py-0 font-weight-bold">
                                Предмет:
                                <span class="font-weight-light ml-2">{{ item.subject }}</span>
                            </v-card-title>
                            <v-card-title class="py-0 font-weight-medium">
                                Автор:
                                <span class="font-weight-light ml-2">{{ item.author }}</span>
                            </v-card-title>
                            <v-card-text>{{ item.text.slice(0, 250) + '...' }}</v-card-text>
                            <v-card-actions>
                                <v-flex d-flex justify-end>
                                    <v-btn d-flex flat :to="`/post/${item._id}`">Більше</v-btn>
                                </v-flex>
                            </v-card-actions>
                        </v-card>
                        <v-divider></v-divider>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
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

<style scoped>
    .absolute-title {
        position: absolute;
        top: -25px;
        left: 0;
        width: 97%;
    }
</style>

