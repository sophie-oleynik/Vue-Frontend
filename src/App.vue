<template>
  <v-app class="grey lighten-2">
    <app-navbar v-if="authentificated"></app-navbar>
    <v-layout>
      <v-flex xs10 offset-xs2 class="pl-5">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-flex>
    </v-layout>
    
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    appNavbar: Navbar
  },
  data() {
    return {
      //
    };
  },
  computed: {
    authentificated() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>