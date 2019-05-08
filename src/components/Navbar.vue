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
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      userLinks: [
        { title: "Головна", icon: "account_box", route: "/" },
        { title: "Розклад", icon: "dashboard", route: "/dashboard" },
        { title: "Тести", icon: "event", route: "/tests" },
        { title: "Чат", icon: "perm_identity", route: "/chat" },
        { title: "Про Нас", icon: "perm_identity", route: "/about" }
      ],
      teacherLinks: [
        { title: "Головна", icon: "account_box", route: "/" },
        { title: "Розклад", icon: "dashboard", route: "/dashboard" },
        { title: "Тести", icon: "event", route: "/tests" },
        { title: "Чат", icon: "perm_identity", route: "/chat" },
        { title: "Про Нас", icon: "perm_identity", route: "/about" }
      ],
      drawer: false
    };
  },
  computed: {
    links() {
      return this.userLinks;
    }
  }
};
</script>

<style>
</style>