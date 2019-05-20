<template>
  <v-flex d-flex xs4 offset-xs4 class="mt-5 pa-5" align-center justify-center>
    <v-form>
      <v-layout justify-space-around wrap class="white mt-5 border">
        <v-flex class="primary title py-3 white--text text-xs-center border">
          LOGIN
        </v-flex>
        <v-flex xs12 class="mt-4">
            <v-flex xs10 d-flex class="mx-5">
              <v-text-field label="Email" v-model="email" :error-messages="emailMessage"></v-text-field>
            </v-flex>
            <v-flex xs10 d-flex class="mx-5">
              <v-text-field label="Password" v-model="password" type="password" :error-messages="passwordMessage"></v-text-field>
            </v-flex>
        </v-flex>
        <v-flex xs12 d-flex class="mx-5 pb-3">
          <v-btn class="primary" @click="login">Вхід</v-btn>
        </v-flex>
        <v-flex d-flex class="mb-4">
          <router-link class="text-xs-center" to="registration">Зареєструватися</router-link>
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
      password: '',
      email: '',
      emailMessage: '',
      passwordMessage: ''
    }
  },
  methods: {
    ...mapActions([
          'loginUser'
      ]),
      valid () {
        if (this.email == '') {
          this.emailMessage = "Потрібно ввести email"
        } else {
          this.emailMessage = '';
        }

        if (this.password == '') {
          this.passwordMessage = "Потрібно ввести пароль"
        } else {
          this.passwordMessage = '';
        }

        if (this.password !== '' && this.email !== '') {
          return true;
        }
        return false
      },
      async login () {
        if( this.valid() ) {
          const auth = await this.loginUser({ email: this.email, passWord: this.password });
          if(auth) {
            this.$router.push({ name: 'home' })    
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
  }
}
</script>

<style>

</style>
