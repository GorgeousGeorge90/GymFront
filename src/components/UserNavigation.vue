<template>
  <v-list>
    <v-list-item
      v-for="item in navigationItems"
      :key="item.id"
      :active="item.url === route.path"
      :disabled="item.url === route.path"
      link
      :title="item.title"
      @click="toRoute(item.url)"
    />
  </v-list>
</template>

<script setup>

  import router from '@/router'

  // data
  const route = useRoute()
  const navigationItems = [
    {
      id: 1,
      title: 'Main',
      url: '/main',
    },
    {
      id: 2,
      title: 'Workout sessions',
      url: '/sessions',
    },
    {
      id: 3,
      title: 'Progress',
      url: '/progress',
    },
    {
      id: 4,
      title: 'Diet plan',
      url: '/diet',
    },
  ]

  // methods
  const toRoute = url => router.push(url)

</script>

<style scoped></style>
