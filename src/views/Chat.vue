<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Чат
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-flex d-flex class="mt-3 px-3">
        <v-flex xs11>
          <v-text-field
            label="Solo"
            v-model="newMessage"
            placeholder="Message..."
            solo
          ></v-text-field>
        </v-flex>
        <v-flex xs2 d-flex align-top>
          <v-btn class="primary mt-0"  @click="sendMessage" large>Відправити</v-btn>
        </v-flex>
      </v-flex>
      <v-flex xs12 class="white ml-3 chat">
          <v-layout column  id="chat">
              <v-flex v-for="(message, index) in chatReverse" :key="index" class="ma-2" :class="messageStyle(message) ? 'userMessage' : 'memberMessage'">
                  <v-card width="300" class="green white--text">
                      <v-card-title class="py-0">{{ message.userName }}</v-card-title>
                      <v-card-text class="py-0">
                          {{ message.text }}
                      </v-card-text>
                  </v-card>
                  <span class="grey--text">data</span>
              </v-flex>
              
          </v-layout>
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
          userName: "Egor",
          userEmail: "egortkachenco@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Arina",
          userEmail: "asdasd",
          text: "Some message to my group"
        },
        {
          userName: "Easdas",
          userEmail: "eg@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Egor",
          userEmail: "egortkachenco@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Arina",
          userEmail: "asdasd",
          text: "Some message to my group"
        },
        {
          userName: "Easdas",
          userEmail: "eg@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Egor",
          userEmail: "egortkachenco@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Arina",
          userEmail: "asdasd",
          text: "Some message to my group"
        },
        {
          userName: "Easdas",
          userEmail: "eg@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Egor",
          userEmail: "egortkachenco@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Arina",
          userEmail: "asdasd",
          text: "Some message to my group"
        },
        {
          userName: "Easdas",
          userEmail: "eg@gmail.com",
          text: "Some message to my group"
        },
        {
          userName: "Egor",
          userEmail: "egortkachenco@gmail.com",
          text: "Some message to my group"
        }
      ],
      newMessage: ""
    };
  },
  computed: {
    chatReverse() {
      return this.messages.reverse();
    }
  },
  methods: {
    messageStyle(item) {
      if (this.$store.state.user.user.email === item.userEmail) {
        return true;
      } else {
        return false;
      }
    },
    sendMessage() {
      const newMessage = {
        userName: "Egor",
        userEmail: "egortkachenco@gmail.com",
        text: ""
      };
      newMessage.text = this.newMessage;
      this.messages.push(newMessage);
      this.newMessage = "";
    }
  }
};
</script>

<style scoped>
.userMessage {
  align-self: flex-end;
}
.memberMessage {
  justify-self: flex-start;
}
.chat {
  overflow-y: scroll;
  height: 75vh;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px
}
</style>

