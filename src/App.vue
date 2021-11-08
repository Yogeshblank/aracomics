<template>
<v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from '@/components/Navbar.vue'

export default Vue.extend({
  name: "App",
components: {
    NavBar
  },
  data: () => ({
    //
  }),
});
</script>
