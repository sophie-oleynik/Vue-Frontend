<template>
  <v-container>
    <v-layout wrap>
        <v-flex xs12 d-flex class="mt-5">
            <v-card class="pb-3">
                <v-flex xs12>
                    <v-card class="mx-3 green absolute-title">
                        <v-layout>
                            <v-flex xs3  class="my-3 ml-3 white--text">
                                <p class="my-0">Чат</p>
                                <p class="my-0 grey--text text--lighten-3 caption">Спілкуйтеся з іншими користувачами</p>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>

                <v-layout wrap class="mt-5">
                    <v-flex d-flex class="mt-3 px-3 mx-0">
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
                    <v-flex xs12 class="chat">
                        <v-layout column  id="chat">
                            <v-flex v-for="(message, index) in reverseMessages" :key="index" class="ma-2" :class="messageStyle(message) ? 'userMessage' : 'memberMessage'">
                                <v-card width="300" class="green white--text">
                                    <v-card-title class="py-1">{{ message.user }}</v-card-title>
                                    <v-card-text class="py-1">
                                        {{ message.message }}
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
import { mapActions } from 'vuex';
import io from 'socket.io-client';

export default {
  data() {
    return {
      messages: [],
      newMessageText: '',
      groupName: '',
      userName: '',
      socket : io(`10.10.10.219:3000/`)
    };
  },
  methods: {
    ...mapActions(['loadChat']),

    messageStyle(item) {
      if (this.$store.state.user.user.name === item.user) {
        return true;
      } else {
        return false;
      }
    },
    sendMessage() {
        this.socket.emit('SEND_MESSAGE', {
            user: this.userName,
            message: this.newMessageText
        });
        this.newMessageText = "";
    }
  },
    computed: {
        reverseMessages() {
            const temp = this.messages;
            return temp.reverse();
        },
    },
  created () {
    this.userName = this.$store.state.user.user.name;
    this.groupName = this.$store.state.user.user.groupName;
  },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages.push(data);
        });
        this.socket.on('HISTORY', (data) => {
            this.messages = data;
        });
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
.userMessage {
  align-self: flex-end;
}
.memberMessage {
  justify-self: flex-start;
}
.chat {
  overflow-y: scroll;
  height: 75vh;
  border-radius: 10px;
  padding: 5px
}
</style>

