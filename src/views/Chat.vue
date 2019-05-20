<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 class="title text-xs-center">
        Чат групи {{ groupName }}
      </v-flex>
      <v-flex xs12>
        <v-divider class="my-3"></v-divider>
      </v-flex>
      <v-flex d-flex class="mt-3 px-3">
        <v-flex xs11>
          <v-text-field
            label="Solo"
            v-model="newMessageText"
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
                      <v-card-title class="py-0">{{ message.fromName }}</v-card-title>
                      <v-card-text class="py-0">
                          {{ message.text }}
                      </v-card-text>
                  </v-card>
              </v-flex>
              
          </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      messages: [],
      newMessageText: '',
      groupName: '',
      userName: ''
    };
  },
  computed: {
    chatReverse() {
      return this.messages.reverse();
    }
  },
  methods: {
    ...mapActions(['loadChat']),
    messageStyle(item) {
      if (this.$store.state.user.user.name === item.fromName) {
        return true;
      } else {
        return false;
      }
    },
    sendMessage() {
      this.messages.push({ fromName: this.userName, text: this.newMessageText });
      this.newMessageText = "";
    }
  },
  created () {
    this.userName = this.$store.state.user.user.name;
    this.groupName = this.$store.state.user.user.groupName;
    this.loadChat();
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

