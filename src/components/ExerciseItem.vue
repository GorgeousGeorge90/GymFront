<template>
  <v-container>
    <v-btn @click="showItems = !showItems">{{ props.type }}</v-btn>
    <v-list v-if="showItems">
      <v-list-item v-for="item in props.sets" :key="item.id">
        <v-row>
          <v-col cols="2">
            Weight
          </v-col>
          <v-col cols="3">
            {{ item.weight }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            Reps
          </v-col>
          <v-col cols="3">
            {{ item.reps }}
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>

  const props = defineProps({
    type: {
      type: String,
      default: 'squat',
    },
    sets: {
      type: Array,
      default: () => [],
    },
  })

  const showItems = ref(false)

</script>

<style scoped lang="sass">

</style>
