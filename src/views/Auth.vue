<template>
  <v-flex d-flex xs4 offset-xs4 class="white mt-5" align-center justify-center>
    <v-form>
      <v-layout justify-space-around wrap>
        <v-flex class="grey darken-3 title py-2 white--text text-xs-center">
          LOGIN
        </v-flex>
        <v-flex xs12>
            <v-flex xs10 d-flex class="mx-5">
              <v-text-field label="Email" v-model="email" :error-messages="emailMessage"></v-text-field>
            </v-flex>
            <v-flex xs10 d-flex class="mx-5">
              <v-text-field label="Password" v-model="passWord" type="password" :error-messages="passwordMessage"></v-text-field>
            </v-flex>
        </v-flex>
        <v-flex xs12 d-flex class="mx-5 pb-3">
          <v-btn class="primary" @click="login">Вхід</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data () {
    return {
      passWord: '',
      email: '',
      emailMessage: '',
      passwordMessage: ''
    }
  },
  methods: {
    ...mapActions([
          'loginUser'
      ]),
      async login () {
        if( this.valid ) {
          await this.loginUser({ email: this.email, passWord: this.passWord }) 
          console.log(this.isAuthentificated)
          if(this.isAuthentificated) {
            this.$router.push({ name: 'inbox' })    
          } else {
            this.emailMessage = "Такого користувача не існує";
          }
        }
      }
  },
  computed: {
    ...mapGetters([
      'isAuthentificated'
    ]),
    valid () {
      if (this.email == '') {
        this.emailMessage = "Потрібно ввести email"
      } else {
        this.emailMessage = '';
      }
      if (this.passWord == '') {
        this.passwordMessage = "Потрібно ввести пароль"
      } else {
        this.passWordMessage = '';
      }
      if (this.passWord !== '' && this.email !== '') {
        return true;
      }
      return false
    }
  }
}
</script>

<style>

</style>
