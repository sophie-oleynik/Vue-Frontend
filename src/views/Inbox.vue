<template>
    <v-container>
    <v-layout wrap>
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <v-card>
                <v-card-title class="headline grey darken-3 white--text" primary-title>
                    Нове повідомлення
                </v-card-title>
                <v-card-text>
                    <v-layout wrap class="mx-3">
                        <v-flex xs12 d-flex class="">
                            <v-text-field placeholder="Email" v-model="newMessageAddress"></v-text-field>
                        </v-flex>
                        <v-flex xs12 class="">
                            <v-textarea
                                    placeholder="Повідомлення ..."
                                    v-model="newMessage.text"
                            ></v-textarea>
                        </v-flex>

                    </v-layout>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="sendMessage">
                        Відправити
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-flex xs12 d-flex class="mt-5">
            <v-card class="pb-3">
                <v-flex xs12>
                    <v-card class="mx-3 green absolute-title">
                        <v-layout>
                            <v-flex xs3  class="my-3 ml-3 white--text">
                                <p class="my-0">Пошта</p>
                                <p class="my-0 grey--text text--lighten-3 caption">У вас {{ inboxFilter.length }} повідомлень</p>
                            </v-flex>
                            <v-btn small fab class="indigo" @click="answerMessage('')">
                                <v-icon class="white--text">message</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-layout wrap class="mt-5">
                    <v-flex xs12 d-flex class="mt-3 px-3" v-for="(item,index) in inboxFilter" :key="index">
                        <v-card class="pa-2" flat>
                            <v-layout>
                                <v-flex xs3 d-flex>
                                    <v-layout wrap>
                                        <v-flex xs12 class="my-0 font-weight-bold" d-flex>
                                            Email:
                                            <span class="font-weight-light ml-2">{{ item.fromEmail }}</span>
                                        </v-flex>
                                        <v-flex xs12 class="my-0 font-weight-bold" d-flex>
                                            Ім'я:
                                            <span class="font-weight-light ml-2">{{ item.fromName }}</span>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs7 d-flex>
                                    {{ item.text }}
                                </v-flex>
                                <v-flex xs2 d-flex class="px-4">
                                    <v-btn small fab class="indigo" @click="answerMessage(item.fromEmail)">
                                        <v-icon class="white--text">message</v-icon>
                                    </v-btn>
                                    <v-btn small fab class="green" @click="readMessage(item._id)">
                                        <v-icon class="white--text">done</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                            <v-divider class="mt-2"></v-divider>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
        dialog: false,
        messages: this.$store.state.user.user.inbox,
        newMessageAddress: '',
        newMessage: {
            fromEmail: this.$store.state.user.user.email,
            fromName: this.$store.state.user.user.name,
            text: "",
            checked: false
        }
    };
  },
  computed: {
    inboxFilter() {
        const userMessages = this.messages.filter(item => { if(!item.checked) return item });
        return userMessages.reverse();
    }
  },
  methods: {
      ...mapActions([ 'addMessage' ]),
      answerMessage (mail) {
          this.newMessageAddress = mail;
          this.dialog  = true;
      },
      sendMessage() {
          const receiver = this.$store.state.user.users.filter(item => { if (item.email === this.newMessageAddress) return item})[0];
          console.log(receiver)
          receiver.inbox.push(this.newMessage);
          this.addMessage(receiver);
          this.dialog = false;
      },
      readMessage(id) {
          const user = this.$store.state.user.user;
          user.inbox.forEach(item => { if(item._id === id) item.checked = true});
          this.addMessage(user);
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

