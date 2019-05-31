<template>
  <v-layout>
    <v-flex d-flex xs4 offset-xs4 class="mt-5 pa-5" align-center justify-center>
      <v-form>
        <v-layout justify-space-around wrap class="white mt-5 ">
          <v-flex class="grey--text text--darken-3 display-1 font-weight-regular py-3 mb-2 text-xs-center">
            Вхід
          </v-flex>
          <v-flex xs12 class="mt-4">
            <v-flex xs10 d-flex class="mx-5">
              <v-text-field label="Email" solo-inverted v-model="email" :error-messages="emailMessage"></v-text-field>
            </v-flex>
            <v-flex xs10 d-flex class="mx-5">
              <v-text-field label="Пароль" solo-inverted v-model="password" type="password" :error-messages="passwordMessage"></v-text-field>
            </v-flex>
          </v-flex>
          <v-flex xs12 d-flex class="mx-5 pb-3">
            <v-btn class="grey darken-3 white--text" @click="login">Вхід</v-btn>
          </v-flex>
          <v-flex d-flex class="mb-4">
            <router-link class="text-xs-center auth-link" to="registration">Зареєструватися</router-link>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
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
  .auth-link {
    text-decoration: none;
    margin: 0 32%;

  }
  .auth-link:hover {
    font-weight: bold;
  }
  input {
    margin-top: 0 !important;
  }
</style>
