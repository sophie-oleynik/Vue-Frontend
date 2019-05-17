<template>
  <v-flex d-flex xs4 offset-xs4 class="white mt-5" align-center justify-center>
    <v-form>
      <v-layout justify-space-around wrap>
        <v-flex class="grey darken-3 title py-2 white--text text-xs-center">
          Реєстрація
        </v-flex>
        <v-flex xs12>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field placeholder="Iм`я" v-model="user.name" :error-messages="nameMessage"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Email" v-model="user.email" :error-message="emailMessage"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Password" v-model="user.password" type="password" :error-messages="passwordMessage"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Subject" v-if="user.teacher" v-model="user.subject"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                  <v-radio-group v-model="user.teacher">
                    <v-radio
                        label="Студент"
                        :value="false"
                    ></v-radio>
                    <v-radio
                        label="Викладач"
                        :value="true"
                    ></v-radio>
                    </v-radio-group>
              </v-flex>
        </v-flex>
        <v-flex xs12 d-flex class="mx-5 pb-3">
          <v-btn class="primary" @click="addUser">Зареєструватися</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
        user: {
            "name": '',
            "email": '',
            "password": '',
            "teacher": false,
            "chat": [],
            "marks": [],
        },
        nameMessage: '',
        emailMessage: '',
        passwordMessage: '',
    };
  },
  methods: {
      ...mapActions([
          'createUser'
      ]),
      addUser () {
        if( this.valid ) {
          this.createUser(this.user);
          this.$router.push({ name: 'inbox'})
        } 
          
        
      }
  },
  computed: {
    valid () {
      if (this.user.name == '') {
        this.nameMessage = "Потрібно ввести ім'я"
      } else {
        this.nameMessage = "";
      }

      if (this.user.email == '') {
        this.emailMessage = "Потрібно ввести email"
      } else {
        this.emailMessage = "";
      }

      if (this.user.password == '') {
        this.passwordMessage = "Потрібно ввести пароль"
      } else {
        this.passwordMessage = "";
      }

      if (this.user.password !== '' && this.user.name !== '' && this.user.email !== '') {
        return true;
      }

      return false
    }
  }
};
</script>

<style>
</style>
