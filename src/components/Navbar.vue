<template>
    <nav>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-toolbar-title>
        <span class="font-weight-light">Ara</span>
        <span class="font-weight-medium">Komix</span>
      </v-toolbar-title>
      </div>
    <v-spacer></v-spacer>
      <v-btn icon @click="chgtheme()">
        <v-icon>mdi-palette-swatch-variant</v-icon>
      </v-btn>
    </v-app-bar>
     <v-snackbar v-model="snack" :timeout="800" top>
      <span>{{the + " Theme Enabled"}}</span>
    </v-snackbar>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({ 
    data() {
    return {
      drawer: null,
      snack : null,
      the:"",
    };
  },
  methods: {
    chgtheme() {
      this.snack = true;
      this.$store.dispatch("ctheme");
      this.the = this.$store.state.theme;
    }
  }
})
</script>