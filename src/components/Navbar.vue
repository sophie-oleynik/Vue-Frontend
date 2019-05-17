<template>
  
    <v-navigation-drawer app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260">
      <v-flex class="text-xs-center title white--text py-4">
        Imoodle
      </v-flex>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logOutUser" :to="{ name: 'login' }">
          <v-list-tile-action>
            <v-icon class="white--text">exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">Вихід</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      userLinks: [
        //{ title: "Головна", icon: "account_box", route: "/" },
        { title: "Пошта", icon: "email", route: "/inbox" },
        //{ title: "Розклад", icon: "dashboard", route: "/dashboard" },
        { title: "Статі", icon: "dashboard", route: "/posts" },
        { title: "Тести", icon: "event", route: "/tests" },
        { title: "Чат", icon: "perm_identity", route: "/chat" },
      ],
      teacherLinks: [
        //{ title: "Головна", icon: "account_box", route: "/" },
        { title: "Пошта", icon: "email", route: "/inbox" },
        { title: "Тести", icon: "event", route: "/tests" },
        { title: "Статі", icon: "dashboard", route: "/posts" }
      ],
      drawer: false
    };
  },
  computed: {
    ...mapGetters([
      'isTeacher'
    ]),
    links() {
      return this.isTeacher ? this.teacherLinks : this.userLinks;
    }
  },
  methods: {
    ...mapActions(['logOutUser'])
  }
};
</script>

<style>
</style>