<template>
  <v-app class="white grey lighten-4">
    <app-navbar></app-navbar>
    <v-layout>
      <v-flex xs12 md10 offset-md2 class="pl-5">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-flex>
    </v-layout>
    
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    appNavbar: Navbar,
  },
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