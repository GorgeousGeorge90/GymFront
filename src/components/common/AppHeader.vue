<template>
  <v-container>
    <v-app-bar>
      <v-app-bar-nav-icon @click="(showNavigation = !showNavigation)" />
      <v-spacer />
      <v-tooltip text="Разлогиниться">
        <template #activator="{ props }">
          <v-btn icon="mdi-exit-to-app" v-bind="props" @click="logOut" />
        </template>
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer v-model="showNavigation">
      <v-list-item title="My Application"></v-list-item>
      <v-divider />
      <user-navigation />
    </v-navigation-drawer>
  </v-container>
</template>
<script setup>

  import router from '@/router'

  const showNavigation = ref(false)

  const logOut = () => {
    router.push({
      name: 'Login',
    })
  }

</script>

<style scoped lang="sass">

</style>
