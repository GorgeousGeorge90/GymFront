<template>
  <v-list>
    <exercise-item v-for="item in props.exercises" :key="item.id" :sets="item.sets" :type="item.type" />
  </v-list>
</template>
<script setup>

  const props = defineProps({
    exercises: {
      type: Array,
      default: () => [],
    },
  })

</script>

<style scoped lang="sass">

</style>
