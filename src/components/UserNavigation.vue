<template>
  <v-list>
    <v-list-item
      v-for="item in navigationItems"
      :key="item.id"
      link
      :title="item.title"
      @click="toRoute(item.url)"
    />
  </v-list>
</template>

<script setup>

  import router from '@/router'

  const navigationItems = [
    {
      id: 1,
      title: 'Workout sessions',
      url: '/sessions',
    },
    {
      id: 2,
      title: 'Progress',
      url: '/progress',
    },
  ]

  const toRoute = url => router.push(url)

</script>

<style scoped lang="sass">

</style>
