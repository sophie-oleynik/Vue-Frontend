<template>
  <div>
    <v-toolbar flat class="grey darken-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-layout>
        <v-flex xs5 offset-xs3 d-flex class="pl-4 white--text title">Сервіс роботи зі студентами</v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn small flat
               @click="logOutUser"
               class="white--text"
               :to="{ name: 'login' }">Вихід<v-icon class="ml-2 white--text">exit_to_app</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app
                         dark
                         floating
                         persistent
                         mobile-break-point="991"
                         width="260">
      <v-flex class="text-xs-center title white--text pt-4 pb-3">
        Imoodle
      </v-flex>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      userLinks: [
        { title: "Головна", icon: "home", route: "/" },
        //{ title: "Розклад", icon: "dashboard", route: "/dashboard" },
        { title: "Пошта", icon: 'message', route: "/inbox" },
        { title: "Статі", icon: "dashboard", route: "/posts" },
        { title: "Тести", icon: "event", route: "/tests" },
        { title: "Чат", icon: "question_answer", route: "/chat" },

      ],
      teacherLinks: [
        { title: "Головна", icon: "home", route: "/" },
        //{ title: "Розклад", icon: "dashboard", route: "/dashboard" },        
        { title: "Пошта", icon: 'message', route: "/inbox" },
        { title: "Тести", icon: "event", route: "/tests" },
        { title: "Статі", icon: "dashboard", route: "/posts" },
        { title: "Додати Пост", icon: "add_box", route: "/newpost" },
        { title: "Додати Тест", icon: "note_add", route: "/newtest" },
  ],
      drawer: false
    };
  },
  methods: {
    ...mapActions(['logOutUser']),
  },
  computed: {
    ...mapGetters([
      'isTeacher'
    ]),
    links() {
      return this.isTeacher ? this.teacherLinks : this.userLinks;
    }
  }
};
</script>

<style>
</style>