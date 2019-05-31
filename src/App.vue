<template>
  <v-app :style="{ background: color }">
    <v-layout>
      <v-flex xs12>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-flex>
    </v-layout>
    
  </v-app>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapActions([
          'loadUsers', 'loadTests', 'loadPosts', 'loadSchedule'
      ]),
  },
  computed: {
    color () {
      if (this.$router.currentRoute.name == "login" || this.$router.currentRoute.name == "registration") {
        return '#ffffff';
      } else {
        return 'grey';
      }
    }
  },
  created () {
    this.loadUsers();
    this.loadTests();
    this.loadPosts();
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