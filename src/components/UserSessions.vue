<template>
  <v-list>
    <v-list-item v-for="session in userSessions" :key="session.id">
      <v-list-item-title>{{ `Тренировка номер №${session.id}! От ${session.date}!` }}</v-list-item-title>
      <exercises-list :exercises="session.exercises" :type="session.type" />
    </v-list-item>
  </v-list>
</template>

<script setup>

  import ExercisesList from '@/components/ExercisesList.vue'

  const userSessions = [
    {
      userId: 1,
      id: 1,
      date: new Date().toISOString().substr(0, 10),
      exercises: [
        {
          id: 1,
          type: 'bench press',
          sets: [
            {
              id: 1,
              weight: 100,
              reps: 10,
            },
            {
              id: 2,
              weight: 100,
              reps: 5,
            },
          ],
        },
        {
          id: 2,
          type: 'squat',
          sets: [
            {
              id: 1,
              weight: 100,
              reps: 10,
            },
            {
              id: 2,
              weight: 100,
              reps: 5,
            },
          ],
        },
      ],
    },
  ]

</script>

<style scoped lang="sass">

</style>
