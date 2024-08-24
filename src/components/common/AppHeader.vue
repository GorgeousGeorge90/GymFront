<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-nav-icon @click="(showNavigation = !showNavigation)"/>
      <v-spacer/>
      <v-tooltip text="Разлогиниться">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-exit-to-app" v-bind="props" @click="logOut"/>
        </template>
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer v-model="showNavigation">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>
  </v-container>
</template>
<script setup>

import router from "@/router";

const showNavigation = ref(false);

const logOut = () => {
  router.push({
    name: 'Login',
  })
}

</script>

<style scoped lang="sass">

</style>
