<template>
  <v-flex d-flex xs4 offset-xs4 class="mt-1 pa-4" align-center justify-center>
    <v-form>
      <v-layout justify-space-around wrap class="white mt-5 border-outline">
        <v-flex class="grey--text text--darken-3 display-1 py-2 text-xs-center">
          Реєстрація
        </v-flex>
        <v-flex xs12 class="mt-4">
            <v-form ref="form">
                <v-flex xs10 d-flex class="mx-5">
                    <v-text-field label="Iм`я"
                                  name="name"
                                  solo-inverted
                                  v-model="user.name"
                                  :rules="nameRules"
                                  required></v-text-field>
                </v-flex>
                <v-flex xs10 d-flex class="mx-5">
                    <v-text-field label="Email"
                                  name="email"
                                  solo-inverted
                                  v-model="user.email"
                                  :rules="emailRules"
                                  required></v-text-field>
                </v-flex>
                <v-flex xs10 d-flex class="mx-5">
                    <v-text-field label="Password"
                                  name="password"
                                  solo-inverted
                                  v-model="user.password"
                                  type="password"
                                  :rules="passwordRules"
                                  required></v-text-field>
                </v-flex>
                <v-flex xs10 d-flex class="mx-5">
                    <v-text-field label="Subject"
                                  solo-inverted
                                  v-if="user.isTeacher"
                                  v-model="user.subject"
                                  :rules="subjectRules"
                                  required></v-text-field>
                </v-flex>
                <v-flex xs10 d-flex class="mx-5">
                    <v-select
                            v-if="!user.isTeacher"
                            solo-inverted
                            v-model="user.groupName"
                            :items="groups"
                            label="Група"
                    ></v-select>
                </v-flex>
                <v-flex xs10 d-flex class="mx-5">
                    <v-radio-group row  v-model="user.isTeacher">
                        <v-radio
                                class="mr-4"
                                label="Студент"
                                :value="false"
                        ></v-radio>
                        <v-radio
                                class="ml-5 pl-3"
                                label="Викладач"
                                :value="true"
                        ></v-radio>
                    </v-radio-group>
                </v-flex>
                <v-flex xs10 d-flex class="mx-5">
                    <v-alert v-if="existEmail" :value="true" type="error">Такий користувач вже існує
                    </v-alert>
                </v-flex>
            </v-form>
        </v-flex>
        <v-flex xs12 d-flex class="mx-5 pb-3">
          <v-btn class="grey darken-3 white--text" @click="addUser">Зареєструватися</v-btn>
        </v-flex>
          <v-flex d-flex class="mb-4">
              <router-link class="text-xs-center auth-link" to="login">Увійти</router-link>
          </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
        user: {
            "name": '',
            "email": '',
            "password": '',
            "groupName": '',
            "isTeacher": false,
            "chat": [],
            "marks": [],
        },
        existEmail: false,
        groups: ['іс-72'],
        emailRules: [
            v => !!v || 'Потрібно ввести email',
            v => /.+@.+/.test(v) || 'Потрібно ввести справжній email'
        ],
        nameRules: [
            v => !!v || 'Потрібно ввести ім\'я',
            v => (v && v.length >= 4) || 'Ім\'я повинно бути більше 4 символів '
        ],
        passwordRules: [
            v => !!v || 'Потрібно ввести пароль',
            v => (v && v.length >= 6) || 'Пароль повинен бути більше 6 символів'
        ],
        subjectRules: [
            v => !!v || 'Введіть назву предмета',
            v => (v && v.length >= 5) || 'Назва предмета повинна бути більше 5 символів'
        ],
    };
  },
  methods: {
      ...mapActions([
          'createUser'
      ]),
      validate () {
          if (this.$refs.form.validate()) {
              return true;
          } else {
              return false;
          }
      },
      async addUser () {
        if( this.validate() ) {
            if(!this.getUsers.filter(item => { if (item.email === this.user['email']) return item; }).length) {
                this.existEmail = false;
                this.createUser(this.user)
                    .then(() => {
                        this.$router.push({ name: 'home'});
                    });
            } else {
                this.existEmail = true;
            }
        }
      }
  },
  computed: {
      ...mapGetters([ 'getUsers' ]),

  }
};
</script>

<style>

</style>
