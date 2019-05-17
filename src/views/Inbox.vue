<template>
    <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Пошта
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-flex xs12 d-flex class="mt-3 px-3" v-for="(item,index) in inboxReverse" :key="index">
        <v-card class="pa-2">
            <v-layout>
                <v-flex xs3 d-flex>
                    Email: {{ item.fromEmail }} <br>
                    Ім'я: {{ item.fromName }}
                </v-flex>
                <v-flex xs9 d-flex>
                    {{ item.text }}
                </v-flex>
                
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          fromEmail: "Egor",
          fromName: "egortkachenco@gmail.com",
          text: "Some message to my group"
        },
        {
          fromEmail: "Egor",
          fromName: "egortkachenco@gmail.com",
          text: "Some message to my group"
        },
      ],
      newMessage: ""
    };
  },
  computed: {
    inboxReverse() {
      return this.messages.reverse();
    }
  },
  methods: {
  }
};
</script>

<style scoped>

</style>

